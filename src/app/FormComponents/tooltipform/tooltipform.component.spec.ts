import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipformComponent } from './tooltipform.component';

describe('TooltipformComponent', () => {
  let component: TooltipformComponent;
  let fixture: ComponentFixture<TooltipformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
