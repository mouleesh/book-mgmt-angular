import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../modal/comment';
import { BookService } from '../service/book/book.service';
import { toastData } from '../../constant';
import { MessageService } from 'primeng/api';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments: Comment[];

  @Input() bookId: string;

  newComment: string;

  constructor(private bookService: BookService, private messageService: MessageService, private userService: UserService) { }

  ngOnInit() {
  }

  AddComment(bookId) {
    if (!(this.newComment.trim() === '' || !this.newComment)) {
      const commentObj: Comment = {
        description: this.newComment,
        username: this.userService.getLoggedUser(),
        commentedAt: (new Date()).toLocaleString()
      }
      this.bookService.addComment(bookId, commentObj);
      this.newComment = "";
    } else {
      this.messageService.add(toastData.commentEmpty);
       this.newComment = "";
    }
  }
}
