import { Injectable } from '@angular/core';
import { bookDetails } from '../../../constant';
import { BookDetail } from '../../modal/book-detail';
import { Subject } from 'rxjs';
import { Comment } from '../../modal/comment';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  favouriteBookIds: Array<any>;
  favouriteBooks: Array<any>;
  bookDetails: BookDetail[];
  bookList = new Subject<BookDetail[]>();

  constructor(private userService: UserService, private router: Router) {
    this.bookDetails = bookDetails;
    this.bookList.next(this.bookDetails);
  }

  //Function for getting loggedIn user's favourite bookIds
  userFavouritesBooks() {
    this.favouriteBookIds = this.userService.getUserFavourites();
    if (this.favouriteBookIds.length > 0) {
      return this.favouriteBooks = this.getAllBooks().filter((book) => {
        return this.favouriteBookIds.indexOf(book.bookId) !== -1;
      })
    } else {
      return [];
    }
  }

  public getBookByID(bookId: string) {
    return this.bookDetails.filter((book) => {
      return book.bookId === bookId;
    })[0];
  }

  public getAllBooks() {
    return this.bookDetails;
  }

  public addComment(bookId, comment): void{
    const updatedBookDetail = this.bookDetails.map((bookDetail) => {
      if(bookDetail.bookId == bookId){
        
        bookDetail.comments.push(comment);
      }
      return bookDetail;
    });
    
    this.bookList.next(updatedBookDetail);
  }

  public updateLike(bookId, isLiked){
    const asdf = this.bookDetails.map((bookDetail) => {
      if(bookDetail.bookId == bookId){
        if(!isLiked){
          bookDetail.likes++;
        } else {
          bookDetail.likes--;
        }
      }
      return bookDetail;
    });
  }

}

