import { SharedModule} from './shared/shared.module';
import { MainModule } from './main/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , SharedModule
    , appRouting
    , MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
