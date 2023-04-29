import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflightcomponentComponent } from './addflightcomponent.component';

describe('AddflightcomponentComponent', () => {
  let component: AddflightcomponentComponent;
  let fixture: ComponentFixture<AddflightcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddflightcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddflightcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
