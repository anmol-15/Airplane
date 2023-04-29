import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepilotcomponentComponent } from './deletepilotcomponent.component';

describe('DeletepilotcomponentComponent', () => {
  let component: DeletepilotcomponentComponent;
  let fixture: ComponentFixture<DeletepilotcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepilotcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepilotcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
