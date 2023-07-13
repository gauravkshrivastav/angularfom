import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnavbarComponent } from './editnavbar.component';

describe('EditnavbarComponent', () => {
  let component: EditnavbarComponent;
  let fixture: ComponentFixture<EditnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
