import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressformComponent } from './progressform.component';

describe('ProgressformComponent', () => {
  let component: ProgressformComponent;
  let fixture: ComponentFixture<ProgressformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
