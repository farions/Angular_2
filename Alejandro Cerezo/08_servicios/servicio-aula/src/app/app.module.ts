// Modula de Angular
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
// Modulos propios
import {ServicesModule} from './services/services.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
