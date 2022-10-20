import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionProgramComponent } from './transition-program.component';

describe('TransitionProgramComponent', () => {
  let component: TransitionProgramComponent;
  let fixture: ComponentFixture<TransitionProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
