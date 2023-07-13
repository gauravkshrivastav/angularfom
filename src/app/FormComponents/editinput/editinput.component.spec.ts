import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinputComponent } from './editinput.component';

describe('EditinputComponent', () => {
  let component: EditinputComponent;
  let fixture: ComponentFixture<EditinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
