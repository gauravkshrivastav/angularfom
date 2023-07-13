import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableformcomponentComponent } from './tableformcomponent.component';

describe('TableformcomponentComponent', () => {
  let component: TableformcomponentComponent;
  let fixture: ComponentFixture<TableformcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableformcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
