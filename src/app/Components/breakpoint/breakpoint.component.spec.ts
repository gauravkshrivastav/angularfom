import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointComponent } from './breakpoint.component';

describe('BreakpointComponent', () => {
  let component: BreakpointComponent;
  let fixture: ComponentFixture<BreakpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakpointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
