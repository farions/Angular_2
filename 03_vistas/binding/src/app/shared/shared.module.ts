import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ]
  , declarations: [
    HeaderComponent
    , FooterComponent
    , LogoComponent]
  , exports: [
    HeaderComponent
    , FooterComponent
    , LogoComponent
  ]
})
export class SharedModule { }
