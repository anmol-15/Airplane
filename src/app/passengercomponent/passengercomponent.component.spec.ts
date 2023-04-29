import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengercomponentComponent } from './passengercomponent.component';

describe('PassengercomponentComponent', () => {
  let component: PassengercomponentComponent;
  let fixture: ComponentFixture<PassengercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
