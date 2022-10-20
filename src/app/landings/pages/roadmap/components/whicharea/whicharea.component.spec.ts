import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhichareaComponent } from './whicharea.component';

describe('WhichareaComponent', () => {
  let component: WhichareaComponent;
  let fixture: ComponentFixture<WhichareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhichareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhichareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
