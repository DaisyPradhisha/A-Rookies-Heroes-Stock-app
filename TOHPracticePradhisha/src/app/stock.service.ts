import { Injectable } from '@angular/core';
import { SList } from './mock-stocks';
import { Sparam } from './stock';

@Injectable ()
export class StockService
{
    getStock():Promise<Sparam[]>
    {
        return Promise.resolve(SList);
    }

    getStocksSlowly(): Promise<Sparam[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getStock()), 2000);
        });
      }
    
      getStocks(code: String): Promise<Sparam> {
        return this.getStock()
                   .then(stocks => stocks.find(stock => stock.code === code));
      }
}
