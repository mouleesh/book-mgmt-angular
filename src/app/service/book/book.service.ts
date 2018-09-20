import { Injectable } from '@angular/core';
import { bookDetails } from '../../../constant';
import { BookDetail } from '../../modal/book-detail';
import { Subject } from 'rxjs';
import { Comment } from '../../modal/comment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookDetails: BookDetail[];

  bookList = new Subject<BookDetail[]>();

  constructor() { 
    this.bookDetails = bookDetails;
    this.bookList.next(this.bookDetails);
  }

  public getBookByID(bookId: string) {
    return this.bookDetails.filter((book) => {
      return book.bookId === bookId;
    })[0];
  }

  public getAllBooks() {
    return this.bookDetails;
  }

  public addComment(bookId, commentText): void{
    const updatedBookDetail = this.bookDetails.map((bookDetail) => {
      if(bookDetail.bookId == bookId){
        const newComment: Comment = {
          description: commentText,
          username: 'asdf',
          commentedAt: 'asdf'
        };
        bookDetail.comments.push(newComment);
      }
      return bookDetail;
    });
    
    this.bookList.next(updatedBookDetail);
  }
}
