

import { Sparam } from './stock';
import { Component, Input,  OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { MdOptionSelectionChange } from "@angular/material/material";
import {MdAutocompleteModule} from '@angular/material';
import {StockService} from './stock.service';
import 'rxjs/add/operator/switchMap';
import {FormControl} from '@angular/forms';


import {SList} from './mock-stocks'
@Component({
  selector: 'app-stock-detail',
  templateUrl:'./stock-detail.component.html',
  styleUrls:['./stock-detail.component.css']
 
})

export class StockDetailComponent  implements OnInit {
  
  title = 'Welcome to StockAid';

  myControl: FormControl = new FormControl();
  i=SList;
  stocks: string[]
 
  

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

    this.stocks = [
      'aapl', 'goog', 'ge', 'msft'
    ];

    
}

goBack(): void {
  this.location.back();
}


}


/*
export class AutocompleteSimpleExample {
  
    myControl: FormControl = new FormControl();
  
    options = [
      'One',
      'Two',
      'Three'
     ];
  
  }
  */