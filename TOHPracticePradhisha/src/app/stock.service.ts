import { Injectable } from '@angular/core';
import { SList } from './mock-stocks';
import { Sparam } from './stock';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable ()
export class StockService
{
  private stocksUrl = 'api/stocks';  // URL to web api
  constructor(private http: Http) { }
  
  getStock():Promise<Sparam[]>
  {
      return Promise.resolve(SList);
  }

  getStocks(code: String): Promise<Sparam> {
    return this.getStock()
               .then(stocks => stocks.find(stock => stock.code === code));
  }
      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
      
}
