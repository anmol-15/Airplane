import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllflightscomponentComponent } from './allflightscomponent.component';

describe('AllflightscomponentComponent', () => {
  let component: AllflightscomponentComponent;
  let fixture: ComponentFixture<AllflightscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllflightscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllflightscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
