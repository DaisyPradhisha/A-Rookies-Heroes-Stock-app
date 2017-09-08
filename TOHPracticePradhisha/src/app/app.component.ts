import { Component } from '@angular/core';
import { Sparam } from './stock';
import {StockService} from './stock.service';
import {OnInit} from '@angular/core';

 
@Component({
  selector: 'app-root',
  template:`<app-stock-detail [ss]="selectedStock"> </app-stock-detail> 
  
  
  <h2>My StockList</h2>
  <ul class="stocks">
    <li *ngFor="let a of stocks"
      [class.selected]="a === selectedStock"
      (click)="onSelect(a)">
      <span class="badge">{{a.code}}</span> {{a.name}}
    </li>
  </ul>`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .stocks {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .stocks li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .stocks li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .stocks li:hover {
    color: #8B6089;
    background-color: rgb(221, 221, 221);
    left: .1em;
  }
  .stocks .text {
    position: relative;
    top: -3px;
  }
  .stocks .badge {
    display: inline-block;
    font-size: small;
    color: #C0D4FF;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `],
  providers: [StockService]
})



export class AppComponent implements OnInit {

  stocks:Sparam[];
  /*StockList = SList;*/
  selectedStock: Sparam;
 
  constructor (private stockService:StockService)
  {

  }

  getStock():void
  {
    this.stockService.getStock().then(stocks=>this.stocks=stocks);
  }

  ngOnInit():void
  {
    this.getStock();
  }
  onSelect(a: Sparam): void { 
    this.selectedStock = a;
  }
}

