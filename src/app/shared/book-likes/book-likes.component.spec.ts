import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLikesComponent } from './book-likes.component';

describe('BookLikesComponent', () => {
  let component: BookLikesComponent;
  let fixture: ComponentFixture<BookLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
