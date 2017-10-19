import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
  ],
  declarations: [
    PipeComponent
  ]
  , exports: [
    PipeComponent
  ]
})
export class FormulariosModule { }
