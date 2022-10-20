import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurRelationShipComponent } from './about-our-relation-ship.component';

describe('AboutOurRelationShipComponent', () => {
  let component: AboutOurRelationShipComponent;
  let fixture: ComponentFixture<AboutOurRelationShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOurRelationShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurRelationShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
