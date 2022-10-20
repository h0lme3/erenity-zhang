import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndabuseComponent } from './endabuse.component';

describe('EndabuseComponent', () => {
  let component: EndabuseComponent;
  let fixture: ComponentFixture<EndabuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndabuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndabuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
