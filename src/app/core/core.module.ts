import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibModule} from '../lib/lib.module';
import {RepositoryModule} from './repository/repository.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    RepositoryModule,
  ]
})
export class CoreModule { }
