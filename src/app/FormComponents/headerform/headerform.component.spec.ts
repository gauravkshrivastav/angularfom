import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderformComponent } from './headerform.component';

describe('HeaderformComponent', () => {
  let component: HeaderformComponent;
  let fixture: ComponentFixture<HeaderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
