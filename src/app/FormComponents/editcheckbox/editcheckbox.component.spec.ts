import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcheckboxComponent } from './editcheckbox.component';

describe('EditcheckboxComponent', () => {
  let component: EditcheckboxComponent;
  let fixture: ComponentFixture<EditcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
