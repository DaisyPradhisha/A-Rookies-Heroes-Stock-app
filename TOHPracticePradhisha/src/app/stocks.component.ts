import { Component } from '@angular/core';
import { Sparam } from './stock';
import {StockService} from './stock.service';
import {OnInit} from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'my-stocks',
  templateUrl:'./stocks.component.html',
  styleUrls:['./stocks.component.css'],
  providers: [StockService]
})



export class StocksComponent implements OnInit {

  stocks:Sparam[];
  /*StockList = SList;*/
  selectedStock: Sparam;
 
  constructor ( private router: Router,
    private stockService:StockService)
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStock.code]);
  }
}

