import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardInputComponent } from './card-input/card-input.component';
import { FormInputComponent } from './form-input/form-input.component';



@NgModule({
  declarations: [
    AppComponent,
    CardInputComponent,
    FormInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
