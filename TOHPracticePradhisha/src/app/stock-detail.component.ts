import { Component, Input } from '@angular/core';

import { Sparam } from './stock';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})

export class StockDetailComponent  {
  title = 'Welcome to StockAid';
@Input() ss:Sparam;

}
