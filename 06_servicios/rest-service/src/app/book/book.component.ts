import { BookService } from '../services/book.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title: string;
  books: Array<any>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.title= '';
    this.books = [];
  }

  btnSearch () {
    this.bookService.getBooks(this.title)
        .subscribe(
          books => this.books = books,
          error => console.error(error)
        );    
  }
}
