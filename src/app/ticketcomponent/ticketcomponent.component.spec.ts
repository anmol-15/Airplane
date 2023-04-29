import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcomponentComponent } from './ticketcomponent.component';

describe('TicketcomponentComponent', () => {
  let component: TicketcomponentComponent;
  let fixture: ComponentFixture<TicketcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
