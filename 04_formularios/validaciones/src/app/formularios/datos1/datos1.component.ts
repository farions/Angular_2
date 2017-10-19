import { Country } from '../country.model';
import { Book } from '../book.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  book: Book;
  countries: Array<Country>;
  sended: boolean;
  @ViewChild('myForm') form: any;

  constructor() { }

  ngOnInit() {
    this.book = new Book();
    this.sended = false;
    this.loadCountries();

    console.log(this.form);

  }

  loadCountries() {
    this.countries = [
      {id:  '1', name: 'Spain'}
      , {id: '2', name: 'France'}
    ];
  }

  btnInsert() {
    this.sended = true;
  }

  btnClear() {
    this.book = new Book();
    this.sended = false;
  }

}
