import { ServicesModule } from './services/services.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
    , ServicesModule
    , BookComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
