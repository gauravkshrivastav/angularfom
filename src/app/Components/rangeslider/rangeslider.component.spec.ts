import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesliderComponent } from './rangeslider.component';

describe('RangesliderComponent', () => {
  let component: RangesliderComponent;
  let fixture: ComponentFixture<RangesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangesliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
