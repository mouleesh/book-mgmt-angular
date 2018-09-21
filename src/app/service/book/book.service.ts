import { Injectable } from '@angular/core';
import { bookDetails } from '../../../constant';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

/** Service for Book Related Queries */
@Injectable({
  providedIn: 'root'
})
export class BookService {
  favouriteBookIds: Array<any>;
  favouriteBooks: Array<any>;
  constructor(private userService: UserService, private router: Router) {
  }
  getAllBooks() {
    return bookDetails;
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






}

