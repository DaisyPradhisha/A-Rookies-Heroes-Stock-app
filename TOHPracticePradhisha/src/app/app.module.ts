import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent }  from './app.component';
import { StockDetailComponent } from './stock-detail.component';
/*import {StocksComponent} from './stocks.component';*/
import {StockService} from './stock.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule 
  ],
  declarations: [
    AppComponent,
    StockDetailComponent
    
  ],
  providers: [
    StockService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
