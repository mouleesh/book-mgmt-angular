import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { UserService } from './service/user/user.service';
import { BookService } from './service/book/book.service';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule
  ],
  providers: [ UserService, BookService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
