import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent  {

  myControl: FormControl = new FormControl();
  
    options = [
      'One',
      'Two',
      'Three'
     ];
  

}
