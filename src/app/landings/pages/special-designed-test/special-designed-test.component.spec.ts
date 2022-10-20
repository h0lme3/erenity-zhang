import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDesignedTestComponent } from './special-designed-test.component';

describe('SpecialDesignedTestComponent', () => {
  let component: SpecialDesignedTestComponent;
  let fixture: ComponentFixture<SpecialDesignedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialDesignedTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialDesignedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
