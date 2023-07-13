import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbuttonComponent } from './editbutton.component';

describe('EditbuttonComponent', () => {
  let component: EditbuttonComponent;
  let fixture: ComponentFixture<EditbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
