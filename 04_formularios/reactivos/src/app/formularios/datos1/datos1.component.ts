import { Book } from '../book.model';
import { Country } from '../country.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  countries: Array<Country>;
  sended: boolean;
  formBook: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.sended = true;
    this.loadCountries();

    this.formBook = this.formBuilder.group({
      author: [null, [Validators.required, Validators.minLength(2)]]
      , title: []
      , editorial: []
      , exlibris: []
      , pages: []
      , genero: []
      , country: []
    })
  }

  loadCountries() {
    this.countries = [
      {id:  '1', name: 'Spain'}
      , {id: '2', name: 'France'}
    ];
  }

  btnInsert() {
    var book = this.formBook.value;
    this.sended = true;
  }

  btnClear() {
    this.sended = false;
  }

}
