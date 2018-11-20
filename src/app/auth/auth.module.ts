import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '@auth/auth.routing.module';
import { LoginComponent } from '@auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, PaginationComponent],
  providers: [MessageService]
})
export class AuthModule { }
