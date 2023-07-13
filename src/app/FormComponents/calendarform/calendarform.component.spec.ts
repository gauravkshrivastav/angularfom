import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarformComponent } from './calendarform.component';

describe('CalendarformComponent', () => {
  let component: CalendarformComponent;
  let fixture: ComponentFixture<CalendarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
