import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictabsComponent } from './dynamictabs.component';

describe('DynamictabsComponent', () => {
  let component: DynamictabsComponent;
  let fixture: ComponentFixture<DynamictabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamictabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamictabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
