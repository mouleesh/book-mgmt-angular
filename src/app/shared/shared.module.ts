import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from './angular.material/angular.material.module';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    ToastModule
  ],
  declarations: [
    BookComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    BookComponent,
    HeaderComponent,
    FooterComponent,
    AngularMaterialModule,
    FormsModule,
    ToastModule
  ]
})
/**SharedModule consists of common reusable components and module */
export class SharedModule { }
