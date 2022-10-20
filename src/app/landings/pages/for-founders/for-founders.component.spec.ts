import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForFoundersComponent } from './for-founders.component';

describe('ForFoundersComponent', () => {
  let component: ForFoundersComponent;
  let fixture: ComponentFixture<ForFoundersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForFoundersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
