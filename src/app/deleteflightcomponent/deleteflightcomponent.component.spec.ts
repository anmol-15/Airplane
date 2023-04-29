import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteflightcomponentComponent } from './deleteflightcomponent.component';

describe('DeleteflightcomponentComponent', () => {
  let component: DeleteflightcomponentComponent;
  let fixture: ComponentFixture<DeleteflightcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteflightcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteflightcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
