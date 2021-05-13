import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {

  @Input() item: Item= new Item();
  @Output() deleteItem: EventEmitter<Item>= new EventEmitter();
  @Output() toggleItem: EventEmitter<Item>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(item:Item){
    this.deleteItem.emit(item);
  }
  onToggle(item:Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item);
  }

}
