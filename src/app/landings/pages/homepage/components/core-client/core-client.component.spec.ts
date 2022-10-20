import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreClientComponent } from './core-client.component';

describe('CoreClientComponent', () => {
  let component: CoreClientComponent;
  let fixture: ComponentFixture<CoreClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
