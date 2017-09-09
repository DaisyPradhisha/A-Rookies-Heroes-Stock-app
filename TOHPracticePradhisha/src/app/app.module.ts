import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent }  from './app.component';
import { StockDetailComponent } from './stock-detail.component';
import {StocksComponent} from './stocks.component';
import {StockService} from './stock.service';
import { RouterModule }   from '@angular/router';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot([
      {
        path: 'stocks',
        component: StocksComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: StockDetailComponent
      }
    ])

  ],
  declarations: [
    AppComponent,
    StockDetailComponent,
    StocksComponent,
    DashboardComponent
    
    
  ],
  providers: [
    StockService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
