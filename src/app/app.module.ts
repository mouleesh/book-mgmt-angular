import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserService } from './service/user/user.service';
import { BookService } from './service/book/book.service';
import { AuthGuardService } from './service/auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BookDetailsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, BookService, MessageService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
