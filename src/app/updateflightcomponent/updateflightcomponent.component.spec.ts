import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateflightcomponentComponent } from './updateflightcomponent.component';

describe('UpdateflightcomponentComponent', () => {
  let component: UpdateflightcomponentComponent;
  let fixture: ComponentFixture<UpdateflightcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateflightcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateflightcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
