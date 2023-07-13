import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadformComponent } from './fileuploadform.component';

describe('FileuploadformComponent', () => {
  let component: FileuploadformComponent;
  let fixture: ComponentFixture<FileuploadformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileuploadformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileuploadformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
