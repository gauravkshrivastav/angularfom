import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditloaderComponent } from './editloader.component';

describe('EditloaderComponent', () => {
  let component: EditloaderComponent;
  let fixture: ComponentFixture<EditloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
