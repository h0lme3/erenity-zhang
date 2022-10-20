import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimProgramComponent } from './victim-program.component';

describe('VictimProgramComponent', () => {
  let component: VictimProgramComponent;
  let fixture: ComponentFixture<VictimProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictimProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictimProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
