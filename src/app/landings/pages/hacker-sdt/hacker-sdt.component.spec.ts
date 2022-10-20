import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerSdtComponent } from './hacker-sdt.component';

describe('HackerSdtComponent', () => {
  let component: HackerSdtComponent;
  let fixture: ComponentFixture<HackerSdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerSdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerSdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
