import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbreakpointComponent } from './editbreakpoint.component';

describe('EditbreakpointComponent', () => {
  let component: EditbreakpointComponent;
  let fixture: ComponentFixture<EditbreakpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbreakpointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbreakpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
