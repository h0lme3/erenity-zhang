import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackAssesmentComponent } from './hack-assesment.component';

describe('HackAssesmentComponent', () => {
  let component: HackAssesmentComponent;
  let fixture: ComponentFixture<HackAssesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackAssesmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
