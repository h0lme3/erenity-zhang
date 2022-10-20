import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdtQuestionBoxComponent } from './sdt-question-box.component';

describe('SdtQuestionBoxComponent', () => {
  let component: SdtQuestionBoxComponent;
  let fixture: ComponentFixture<SdtQuestionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdtQuestionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdtQuestionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
