import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighComponent } from './fligh.component';

describe('FlighComponent', () => {
  let component: FlighComponent;
  let fixture: ComponentFixture<FlighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlighComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
