import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrankWheelComponent } from './crank-wheel.component';

describe('CrankWheelComponent', () => {
  let component: CrankWheelComponent;
  let fixture: ComponentFixture<CrankWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrankWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrankWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
