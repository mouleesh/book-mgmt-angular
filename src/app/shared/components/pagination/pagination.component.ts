import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
    totalPages: number;
    
    paginateFrameSize = 3; //TODO: should be odd number, move as constant, and get from user also.
    FramePivotIndex = Math.floor(this.paginateFrameSize / 2);

    pageClick(pageNumber): void {
        if(pageNumber >= 1 && pageNumber <= this.totalPages){
            this.currentPage = pageNumber
            this.onPageChange.emit(this.currentPage)

            let startValue = 1;
            let endValue = this.paginateFrameSize;
            
            if(this.currentPage >= this.pageNumberArray[this.FramePivotIndex] 
                || (this.currentPage < this.pageNumberArray[this.FramePivotIndex] 
                    && this.currentPage > this.FramePivotIndex)) {

                startValue = this.currentPage - this.FramePivotIndex;
                endValue = this.currentPage + this.FramePivotIndex;
                
                if(endValue >= this.totalPages) {
                    startValue = this.totalPages - (2 * this.FramePivotIndex)
                    endValue = this.totalPages;
                }
            }
            
            this.pageNumberArray.length = 0;

            for(let i=startValue; i<=endValue; i++) {
                this.pageNumberArray.push(i)
            }
        }
    }

    ngOnInit() {
        this.totalPages = Math.ceil(this.totalItemsCount / this.itemsPerPage);
        const pagesToShow = this.totalPages < this.paginateFrameSize ? this.totalPages : this.paginateFrameSize;

        for(let i=1; i<=pagesToShow; i++) {
            this.pageNumberArray.push(i)
        }
    }
}

//TODO: Option to disable First and last button as an input.