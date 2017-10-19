import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  curso: string;

  constructor() { }

  ngOnInit() {
    this.curso = 'Angular 4.x';
  }

}
