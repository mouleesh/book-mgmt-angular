import { Injectable } from "@angular/core";
import { bookDetails, toastData } from "../../../constant";
import { BookDetail } from "../../modal/book-detail";
import { Subject } from "rxjs";
import { Comment } from "../../modal/comment";
import { UserService } from "../user/user.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

/** Service for Book Related Queries */
@Injectable({
  providedIn: "root"
})
export class BookService {
  favouriteBookIds: Array<any>;
  favouriteBooks: Array<any>;
  bookDetails: BookDetail[];

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.bookDetails = bookDetails;
  }

  //Function for getting loggedIn user's favourite bookIds
  userFavouritesBooks() {
    this.favouriteBookIds = this.userService.getUserFavourites();
    if (this.favouriteBookIds.length > 0) {
      return (this.favouriteBooks = this.getAllBooks().filter(book => {
        return this.favouriteBookIds.indexOf(book.bookId) !== -1;
      }));
    } else {
      return [];
    }
  }

  public getBookByID(bookId: string) {
    return this.bookDetails.filter(book => {
      return book.bookId === bookId;
    })[0];
  }

  private getBookId() {
    const bookIdPrefix = "BK";
    let bookId;
    let isBookIDExist = true;
    let bookIdSufix = 100;

    for (let i = 0; i < 20 && isBookIDExist; i++) {
      bookId = bookIdPrefix + bookIdSufix;
      if (this.getBookByID(bookId)) {
        isBookIDExist = true;
      } else {
        isBookIDExist = false;
      }
      bookIdSufix++;
    }
    return bookId;
  }

  private isBookByBookNameExists(bookName: string) {
    const book = this.bookDetails.filter(book => {
      return book.bookName === bookName;
    });
    return book.length > 0;
  }

  public addBook({ bookName, authorName, description }) {
    if (this.isBookByBookNameExists(bookName)) {
      this.messageService.add(toastData.bookNameError);
    } else {
      let newBook = new BookDetail();
      newBook.author = authorName;
      newBook.bookId = this.getBookId();
      newBook.bookName = bookName;
      newBook.description = description;

      this.bookDetails.push(newBook);
      this.messageService.add(toastData.addBookSucess);
    }
  }
  public getAllBooks() {
    return this.bookDetails;
  }

  public addComment(bookId, comment): void {
    this.bookDetails.map(bookDetail => {
      if (bookDetail.bookId == bookId) {
        bookDetail.comments.push(comment);
      }
      return bookDetail;
    });
  }

  public updateLike(bookId, isLiked) {
    this.bookDetails.map(bookDetail => {
      if (bookDetail.bookId == bookId) {
        if (!isLiked) {
          bookDetail.likes++;
        } else {
          bookDetail.likes--;
        }
      }
      return bookDetail;
    });
  }
}
