import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesliderformComponent } from './imagesliderform.component';

describe('ImagesliderformComponent', () => {
  let component: ImagesliderformComponent;
  let fixture: ComponentFixture<ImagesliderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesliderformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesliderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
