import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


const myModule = [
  MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports:[
    myModule
  ],
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
