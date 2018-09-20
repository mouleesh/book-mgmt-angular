import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../service/book/book.service';
import { BookDetail } from '../modal/book-detail';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookDetail: BookDetail;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.getBookDetails();
  }

  getBookDetails(): void {
    const id = this.route.snapshot.params.id;

    this.bookDetail = this.bookService.getBookByID(id);
  }

}
