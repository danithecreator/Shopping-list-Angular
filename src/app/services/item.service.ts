import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpCliente:HttpClient) { }
  url:string='http://localhost:3000/items';
  httpOptions={
    headers:{
      'Content-Type':'application/json'
    }
  }


  getItems():Observable<Item[]>{
    return this.httpCliente.get<Item[]>(this.url);
  }

  addItem(item:Item):Observable<Item>{
    return this.httpCliente.post<Item>(this.url,item,this.httpOptions);
  }

  toggleItem(item:Item):Observable<Item>{
    return this.httpCliente.put<Item>(this.url +item.id,item,this.httpOptions);
  }
  deleteItem(item:Item):Observable<Item>{
    return this.httpCliente.delete<Item>(this.url+item.id);
  }
}
