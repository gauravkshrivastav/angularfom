import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditswitchcontrolComponent } from './editswitchcontrol.component';

describe('EditswitchcontrolComponent', () => {
  let component: EditswitchcontrolComponent;
  let fixture: ComponentFixture<EditswitchcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditswitchcontrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditswitchcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
