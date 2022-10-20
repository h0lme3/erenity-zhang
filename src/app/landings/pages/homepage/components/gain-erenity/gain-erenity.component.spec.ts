import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GainErenityComponent } from './gain-erenity.component';

describe('GainErenityComponent', () => {
  let component: GainErenityComponent;
  let fixture: ComponentFixture<GainErenityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GainErenityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GainErenityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
