import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  title:string="";
  price:number=0;
  quantity:number=0;
  id:string="";
  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const item= new Item();
    item.id= this.id;
    item.title=this.title;
    item.price=this.price;
    item.quantity=this.quantity;
    item.completed=false;

    this.itemService.addItem(item).subscribe(i=>{
      this.router.navigate(['/']);
    });
    this.router.navigate(['/']);
  }


}
