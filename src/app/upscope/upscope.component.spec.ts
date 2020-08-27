import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscopeComponent } from './upscope.component';

describe('UpscopeComponent', () => {
  let component: UpscopeComponent;
  let fixture: ComponentFixture<UpscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
