import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {LibModule} from './lib/lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        CoreModule,
        SharedModule,
        LibModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
