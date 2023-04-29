import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpilotscomponentComponent } from './allpilotscomponent.component';

describe('AllpilotscomponentComponent', () => {
  let component: AllpilotscomponentComponent;
  let fixture: ComponentFixture<AllpilotscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpilotscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpilotscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
