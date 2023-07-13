import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittableformcomponentComponent } from './edittableformcomponent.component';

describe('EdittableformcomponentComponent', () => {
  let component: EdittableformcomponentComponent;
  let fixture: ComponentFixture<EdittableformcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittableformcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittableformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
