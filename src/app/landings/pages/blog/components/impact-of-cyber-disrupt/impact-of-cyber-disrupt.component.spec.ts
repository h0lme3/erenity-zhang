import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactOfCyberDisruptComponent } from './impact-of-cyber-disrupt.component';

describe('ImpactOfCyberDisruptComponent', () => {
  let component: ImpactOfCyberDisruptComponent;
  let fixture: ComponentFixture<ImpactOfCyberDisruptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactOfCyberDisruptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactOfCyberDisruptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
