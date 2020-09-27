import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardInputComponent } from './card-input/card-input.component';
import { CardOutputComponent } from './card-output/card-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CardInputComponent,
    CardOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
