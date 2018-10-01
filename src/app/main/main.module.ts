import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@main/dashboard/dashboard.component';
import { BookDetailsComponent } from '@main/book-details/book-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ChartModule } from "primeng/chart";
import { ToastModule } from "primeng/toast";
import { MainRoutingModule, routedComponents } from '@main/main.routing';
import { BookService } from '../service/book/book.service';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    SharedModule,
    ChartModule,
    ToastModule
  ],
  declarations: [BookDetailsComponent, routedComponents],
  providers: [BookService, MessageService]
})
export class MainModule { }
