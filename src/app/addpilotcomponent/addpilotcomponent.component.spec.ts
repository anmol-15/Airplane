import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpilotcomponentComponent } from './addpilotcomponent.component';

describe('AddpilotcomponentComponent', () => {
  let component: AddpilotcomponentComponent;
  let fixture: ComponentFixture<AddpilotcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpilotcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpilotcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
