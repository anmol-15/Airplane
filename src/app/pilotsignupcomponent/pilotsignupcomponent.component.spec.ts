import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsignupcomponentComponent } from './pilotsignupcomponent.component';

describe('PilotsignupcomponentComponent', () => {
  let component: PilotsignupcomponentComponent;
  let fixture: ComponentFixture<PilotsignupcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotsignupcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotsignupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
