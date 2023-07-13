import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchctlComponent } from './switchctl.component';

describe('SwitchctlComponent', () => {
  let component: SwitchctlComponent;
  let fixture: ComponentFixture<SwitchctlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchctlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchctlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
