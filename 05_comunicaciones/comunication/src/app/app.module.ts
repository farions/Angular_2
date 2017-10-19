import { CommunicationModule } from "./comunication/comunication.module"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatherComponent } from './communication/father/father.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent
  ],
  imports: [
    BrowserModule
    , CommunicationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
