import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '@shared/components/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { AddbookComponent } from '@shared/components/addbook/addbook.component';
import { BookComponent } from '@shared/components/book/book.component';
import { CommentComponent } from '@shared/components/comment/comment.component';
import { FavouriteBookListComponent } from '@shared/components/favourite-book-list/favourite-book-list.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule
  ],
  declarations: [BookListComponent, AddbookComponent, BookComponent, CommentComponent, FavouriteBookListComponent],
  exports: [BookListComponent, AddbookComponent, BookComponent, CommentComponent, FavouriteBookListComponent]
})
export class ComponentsModule { }
