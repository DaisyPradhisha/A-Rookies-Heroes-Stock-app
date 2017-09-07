import { Component } from '@angular/core';
import { Sparam } from './stock';
import {StockService} from './stock.service';
import {OnInit} from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
    this.stocks=this.stockService.getStock();
  }

  ngOnInit():void
  {
    this.getStock();
  }
  onSelect(a: Sparam): void {
    this.selectedStock = a;
  }
}

