import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutionaryComponent } from './revolutionary.component';

describe('RevolutionaryComponent', () => {
  let component: RevolutionaryComponent;
  let fixture: ComponentFixture<RevolutionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevolutionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolutionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
