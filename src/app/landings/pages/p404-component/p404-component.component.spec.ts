import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P404Component } from './p404-component.component';

describe('P404ComponentComponent', () => {
  let component: P404Component;
  let fixture: ComponentFixture<P404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
