import { Component,OnInit } from '@angular/core';
import { Sparam } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
      stocks: Sparam[] = [];
    
      constructor(private stockService: StockService) { }
    
      ngOnInit(): void {
        this.stockService.getStock()
          .then(stocks => this.stocks = stocks.slice(1, 5));
      }
    }