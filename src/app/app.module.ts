import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { HeaderComponent } from './components/header/header.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { TotalComponent } from './components/total/total.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HeaderComponent,
    SingleItemComponent,
    TotalComponent,
    NewItemComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
