import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConnectionPageComponent } from './client-connection-page.component';

describe('ClientConnectionPageComponent', () => {
  let component: ClientConnectionPageComponent;
  let fixture: ComponentFixture<ClientConnectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConnectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConnectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
