import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditheaderComponent } from './editheader.component';

describe('EditheaderComponent', () => {
  let component: EditheaderComponent;
  let fixture: ComponentFixture<EditheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
