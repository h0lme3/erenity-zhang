import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOurProductComponent } from './view-our-product.component';

describe('ViewOurProductComponent', () => {
  let component: ViewOurProductComponent;
  let fixture: ComponentFixture<ViewOurProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOurProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOurProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
