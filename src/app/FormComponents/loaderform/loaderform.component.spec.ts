import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderformComponent } from './loaderform.component';

describe('LoaderformComponent', () => {
  let component: LoaderformComponent;
  let fixture: ComponentFixture<LoaderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
