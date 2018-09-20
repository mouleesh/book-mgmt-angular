import { Comment } from './comment';

export class BookDetail {
    bookId: string;
    likes: number;
    bookName: string;
    comments: Array<Comment>;
    author: string;
    description: string;
}