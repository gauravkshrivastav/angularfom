import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditalertComponent } from './editalert.component';

describe('EditalertComponent', () => {
  let component: EditalertComponent;
  let fixture: ComponentFixture<EditalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
