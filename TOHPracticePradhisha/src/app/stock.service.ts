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

    
}
