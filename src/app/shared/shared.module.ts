import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibModule} from '../lib/lib.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibModule,
  ],
  exports: [
    LibModule
  ]
})
export class SharedModule { }
