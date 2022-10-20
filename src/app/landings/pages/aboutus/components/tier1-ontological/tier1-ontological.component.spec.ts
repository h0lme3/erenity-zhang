import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tier1OntologicalComponent } from './tier1-ontological.component';

describe('Tier1OntologicalComponent', () => {
  let component: Tier1OntologicalComponent;
  let fixture: ComponentFixture<Tier1OntologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tier1OntologicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tier1OntologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
