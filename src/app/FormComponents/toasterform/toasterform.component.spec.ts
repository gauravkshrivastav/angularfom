import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterformComponent } from './toasterform.component';

describe('ToasterformComponent', () => {
  let component: ToasterformComponent;
  let fixture: ComponentFixture<ToasterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToasterformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
