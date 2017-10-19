import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
    , RouterModule
  ]
  , declarations: [
    HeaderComponent
    , FooterComponent
    , LogoComponent, MenuComponent]
  , exports: [
    HeaderComponent
    , FooterComponent
    , LogoComponent
    , MenuComponent
  ]
})
export class SharedModule { }
