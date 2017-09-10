import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent }  from './app.component';
import { StockDetailComponent } from './stock-detail.component';
import {StocksComponent} from './stocks.component';
import {StockService} from './stock.service';
import { RouterModule }   from '@angular/router';
import {DashboardComponent} from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule
     ],
  declarations: [
    AppComponent,
    StockDetailComponent,
    StocksComponent,
    DashboardComponent
    
    
  ],
  providers: [StockService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
