import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesliderformComponent } from './rangesliderform.component';

describe('RangesliderformComponent', () => {
  let component: RangesliderformComponent;
  let fixture: ComponentFixture<RangesliderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangesliderformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangesliderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
