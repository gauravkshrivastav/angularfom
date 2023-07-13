import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcontrolComponent } from './switchcontrolform.component';

describe('SwitchcontrolComponent', () => {
  let component: SwitchcontrolComponent;
  let fixture: ComponentFixture<SwitchcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchcontrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
