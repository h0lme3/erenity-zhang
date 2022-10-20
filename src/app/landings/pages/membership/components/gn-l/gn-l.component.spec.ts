import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnLComponent } from './gn-l.component';

describe('GnLComponent', () => {
  let component: GnLComponent;
  let fixture: ComponentFixture<GnLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
