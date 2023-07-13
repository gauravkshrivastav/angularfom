import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictabsformComponent } from './dynamictabsform.component';

describe('DynamictabsformComponent', () => {
  let component: DynamictabsformComponent;
  let fixture: ComponentFixture<DynamictabsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamictabsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamictabsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
