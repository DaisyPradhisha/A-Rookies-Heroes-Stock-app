import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent }  from './app.component';
import { StockDetailComponent } from './stock-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule 
  ],
  declarations: [
    AppComponent,
    StockDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
