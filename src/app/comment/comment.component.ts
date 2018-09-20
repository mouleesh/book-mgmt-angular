import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../modal/comment';
import { BookService } from '../service/book/book.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[];

  @Input() bookId: string;

  newComment: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    
  }

  AddComment(bookId){
    this.bookService.addComment(bookId, this.newComment);
  }

}
