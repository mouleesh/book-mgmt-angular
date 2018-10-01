import { Component } from '@angular/core';
import { BookService } from '../../../service/book/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  bookName: string;
  authorName: string;
  description: string;
  constructor(private bookService:BookService) {}

  addBook(){
    const bookData = {
      bookName: this.bookName,
      authorName: this.authorName,
      description: this.description
    };
    this.bookService.addBook(bookData);
  }
}
