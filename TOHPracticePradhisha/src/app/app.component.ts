import { Component } from '@angular/core';

export class sname {
  code: string;
  companyname: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Welcome to StockAid';
  stockname: sname = {
    code: 'AAPL',
    companyname: 'APPLE'
  };
}
