import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  idea: string;
  ideas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.idea = '';
    this.ideas = [];
  }

  btnAdd() {
    this.ideas.push(this.idea);
    this.idea = '';
  }

}
