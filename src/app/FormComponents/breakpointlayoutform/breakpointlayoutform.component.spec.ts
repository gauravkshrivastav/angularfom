import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointlayoutformComponent } from './breakpointlayoutform.component';

describe('BreakpointlayoutformComponent', () => {
  let component: BreakpointlayoutformComponent;
  let fixture: ComponentFixture<BreakpointlayoutformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakpointlayoutformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakpointlayoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
