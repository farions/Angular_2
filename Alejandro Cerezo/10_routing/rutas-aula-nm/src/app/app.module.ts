import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRouting} from './app.routing'

import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
