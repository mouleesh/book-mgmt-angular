import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../service/book/book.service';
import { UserService } from '../service/user/user.service';
import { BookDetail } from '../modal/book-detail';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetail: BookDetail;
  loggedUserlikedBooks: Array<object> = [];
  isCurrentBookLiked: Boolean; 
  imageUrl: string;

  constructor(private route: ActivatedRoute, private bookService: BookService, private userService: UserService) { }

  ngOnInit() {
    this.getBookDetails();

    this.isCurrentBookLiked = this.checkIsCurrentBookLiked();
    this.imageUrl = "https://loremflickr.com/320/240/book";
  }

  checkIsCurrentBookLiked(){
    this.loggedUserlikedBooks = this.userService.getUserFavourites();
    
    let matchedBookIds = this.loggedUserlikedBooks.filter((bookId: any) => {
      return bookId === this.bookDetail.bookId;
    });

    return matchedBookIds.length > 0;
  }

  getBookDetails(): void {
    const id = this.route.snapshot.params.id;
    this.bookDetail = this.bookService.getBookByID(id);
  }

  OnLike(bookId){
    this.bookService.updateLike(bookId, this.isCurrentBookLiked);
    this.userService.updateUserFavourites(bookId, this.isCurrentBookLiked);
    this.isCurrentBookLiked = this.checkIsCurrentBookLiked();
  }
}
