import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgingProgramComponent } from './bridging-program.component';

describe('BridgingProgramComponent', () => {
  let component: BridgingProgramComponent;
  let fixture: ComponentFixture<BridgingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgingProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
