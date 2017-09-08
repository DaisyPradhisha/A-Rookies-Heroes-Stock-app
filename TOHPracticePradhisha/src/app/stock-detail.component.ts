import { Component, Input } from '@angular/core';

import { Sparam } from './stock';

@Component({
  selector: 'app-stock-detail',
  template:`<h1>{{title}}</h1>
  <div *ngIf="ss">
      
    <h2>{{ss.name}} details!</h2>
    <div><label>id: </label>{{ss.code}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="ss.name" placeholder="name"/>
    </div>
  </div>`
 
})

export class StockDetailComponent  {
  title = 'Welcome to StockAid';
@Input() ss:Sparam;

}
