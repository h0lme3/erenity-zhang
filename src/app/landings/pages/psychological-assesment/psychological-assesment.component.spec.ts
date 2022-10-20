import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologicalAssesmentComponent } from './psychological-assesment.component';

describe('PsychologicalAssesmentComponent', () => {
  let component: PsychologicalAssesmentComponent;
  let fixture: ComponentFixture<PsychologicalAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologicalAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologicalAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
