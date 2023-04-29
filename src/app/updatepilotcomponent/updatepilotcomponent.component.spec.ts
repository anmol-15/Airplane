import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepilotcomponentComponent } from './updatepilotcomponent.component';

describe('UpdatepilotcomponentComponent', () => {
  let component: UpdatepilotcomponentComponent;
  let fixture: ComponentFixture<UpdatepilotcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepilotcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepilotcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
