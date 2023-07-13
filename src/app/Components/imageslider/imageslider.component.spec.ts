import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesliderComponent } from './imageslider.component';

describe('ImagesliderComponent', () => {
  let component: ImagesliderComponent;
  let fixture: ComponentFixture<ImagesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
