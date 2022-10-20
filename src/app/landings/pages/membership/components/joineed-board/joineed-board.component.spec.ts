import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoineedBoardComponent } from './joineed-board.component';

describe('JoineedBoardComponent', () => {
  let component: JoineedBoardComponent;
  let fixture: ComponentFixture<JoineedBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoineedBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoineedBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
