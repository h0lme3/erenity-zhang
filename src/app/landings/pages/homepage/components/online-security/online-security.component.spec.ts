import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSecurityComponent } from './online-security.component';

describe('OnlineSecurityComponent', () => {
  let component: OnlineSecurityComponent;
  let fixture: ComponentFixture<OnlineSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
