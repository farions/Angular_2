import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos3',
  templateUrl: './datos3.component.html',
  styleUrls: ['./datos3.component.css']
})
export class Datos3Component implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Mario';
  }

  btnDeleteName() {
    this.name = '---';
  }
}
