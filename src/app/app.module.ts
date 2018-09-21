import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { UserService } from './service/user/user.service';
import { BookService } from './service/book/book.service';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, BookService, MessageService],
  bootstrap: [AppComponent]
})
/**Root Module*/
export class AppModule { }
