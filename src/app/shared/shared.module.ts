import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angularmaterials/angular-materials.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BookLikesComponent } from './book-likes/book-likes.component';
import { FavouriteBookListComponent } from './favourite-book-list/favourite-book-list.component';
import { FilterPipe } from '../shared/custom-pipes/filter.pipe';
import { ChartModule } from 'primeng/chart';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialsModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule,
    RoutingModule
  ],
  exports: [
    BookListComponent,
    BookLikesComponent,
    BookComponent,
    FavouriteBookListComponent,
    FilterPipe,
    CommonModule,
    BookComponent,
    HeaderComponent,
    FooterComponent,
    AngularMaterialsModule,
    BrowserAnimationsModule,
    ToastModule,
    FormsModule,
    ChartModule,
    RoutingModule
  ],
  declarations: [BookComponent,
    BookListComponent,
    BookLikesComponent,
    HeaderComponent,
    FooterComponent,
    FavouriteBookListComponent,
    FilterPipe]
})
export class SharedModule { }
