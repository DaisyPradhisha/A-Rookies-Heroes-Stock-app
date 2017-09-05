import { Component } from '@angular/core';

export class Sparam {
  code: string;
  name: string;
}
 
const SList: Sparam[] = [
  { code: 'APPL', name: 'Apple' },
  { code: 'GOOG', name: 'Google' },
  { code: 'AJX', name: '	Great Ajax Corp' },
  { code: 'ORCL', name: 'Oracle Corp' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'StockAid';
  StockList = SList;
  selectedStock: Sparam;
 
  onSelect(a: Sparam): void {
    this.selectedStock = a;
  }
}

