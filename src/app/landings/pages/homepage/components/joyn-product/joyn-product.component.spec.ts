import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoynProductComponent } from './joyn-product.component';

describe('JoynProductComponent', () => {
  let component: JoynProductComponent;
  let fixture: ComponentFixture<JoynProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoynProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoynProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
