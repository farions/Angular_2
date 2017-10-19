import { BookService } from '../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  id: string;
  books: Array<string>;

  constructor(private bookSerice: BookService) { }

  ngOnInit() {
  }

  btnSearch () {
    this.books = this.bookSerice.getBooks(this.id);
  }
}
