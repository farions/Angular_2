import { BookService } from '../services/book.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title: string;
  books: Array<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.title= '';
    this.books = [];
  }

  btnSearch () {
    debugger

    this.books = [];

    let url ="https://www.googleapis.com/books/v1/volumes?q=intitle:"+this.title;

    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        for (var i = 0; i < data.items.length; i++) {
          debugger;
          let book = data.items[i].volumeInfo;
          this.books.push(book);
        }
      },
      error => console.error(error)
    );
  }
}
