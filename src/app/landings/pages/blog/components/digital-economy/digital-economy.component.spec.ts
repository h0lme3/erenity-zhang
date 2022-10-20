import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalEconomyComponent } from './digital-economy.component';

describe('DigitalEconomyComponent', () => {
  let component: DigitalEconomyComponent;
  let fixture: ComponentFixture<DigitalEconomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalEconomyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
