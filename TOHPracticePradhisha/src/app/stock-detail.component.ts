

import { Sparam } from './stock';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import {StockService} from './stock.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-stock-detail',
  templateUrl:'./stock-detail.component.html',
  styleUrls:['./stock-detail.component.css']
 
})

export class StockDetailComponent  implements OnInit {
  title = 'Welcome to StockAid';
  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
@Input() ss:Sparam;

ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.stockService.getStocks(params.get('code')))
    .subscribe(ss => this.ss = ss);
    
}

goBack(): void {
  this.location.back();
}


}
