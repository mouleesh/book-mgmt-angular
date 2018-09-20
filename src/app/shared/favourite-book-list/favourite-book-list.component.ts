import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-book-list',
  templateUrl: './favourite-book-list.component.html',
  styleUrls: ['./favourite-book-list.component.css']
})

export class FavouriteBookListComponent implements OnInit {
  @Input() favBooks:Array<any>;
  @Input() isFavAvail:Boolean;
  
  constructor() { }
  ngOnInit() { }

}
