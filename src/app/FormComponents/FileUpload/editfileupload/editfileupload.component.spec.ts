import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfileuploadComponent } from './editfileupload.component';

describe('EditfileuploadComponent', () => {
  let component: EditfileuploadComponent;
  let fixture: ComponentFixture<EditfileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfileuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
