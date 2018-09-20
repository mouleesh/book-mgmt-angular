import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book/book.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  bookList: Array<object> = [];
  favouriteBooks: Array<object> = [];
  searchText: String;
  bookAnalytics = { names: [], likes: [] };
  data: any;
  isFavAvail: Boolean;

  constructor(private bookService: BookService, private userService: UserService) {
    // All Books 
    this.bookList = this.bookService.getAllBooks();

    //User Favourites
    this.favouriteBooks = this.bookService.userFavouritesBooks();
    (this.favouriteBooks.length > 0) ? this.isFavAvail = true : this.isFavAvail = false;

    // Analytics : Book - Likes 
    this.bookList.map((book: any) => {
      this.bookAnalytics.names.push(book.bookName);
      this.bookAnalytics.likes.push(book.likes);
      return this.bookAnalytics;
    })
    this.data = {
      labels: this.bookAnalytics.names,
      datasets: [
        {
          label: 'Likes',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: this.bookAnalytics.likes
        }
      ]
    }
  }
  ngOnInit() {
  }

}
