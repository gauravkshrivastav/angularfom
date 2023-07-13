import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarformComponent } from './navbarform.component';

describe('NavbarformComponent', () => {
  let component: NavbarformComponent;
  let fixture: ComponentFixture<NavbarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
