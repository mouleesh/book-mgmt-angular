import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBookListComponent } from './favourite-book-list.component';

describe('FavouriteBookListComponent', () => {
  let component: FavouriteBookListComponent;
  let fixture: ComponentFixture<FavouriteBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
