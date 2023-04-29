import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotcomponentComponent } from './pilotcomponent.component';

describe('PilotcomponentComponent', () => {
  let component: PilotcomponentComponent;
  let fixture: ComponentFixture<PilotcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
