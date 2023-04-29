import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotpagecomponentComponent } from './pilotpagecomponent.component';

describe('PilotpagecomponentComponent', () => {
  let component: PilotpagecomponentComponent;
  let fixture: ComponentFixture<PilotpagecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotpagecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotpagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
