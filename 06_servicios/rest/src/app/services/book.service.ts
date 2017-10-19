import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor() { }

  getBooks(id: string) {
    return [
      'Angular 2'
      , 'Angular 4'
      , 'Angular 5'
    ];
  }
}
