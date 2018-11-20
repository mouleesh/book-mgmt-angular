import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {  } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['pagination.component.css']
})
export class PaginationComponent implements OnInit{
    @Input() totalItemsCount: number;

    @Input() itemsPerPage: number;

    @Output() onPageChange: EventEmitter<any> = new EventEmitter();

    pageNumberArray: number[] = [];

    currentPage: number = 1;

    pageClick(pageNumber): void {
        this.onPageChange.emit(pageNumber)
        this.currentPage = pageNumber
    }

    ngOnInit() {
        for(let i=1; i<=Math.ceil(this.totalItemsCount / this.itemsPerPage); i++) {
            this.pageNumberArray.push(i)
        }
    }
}