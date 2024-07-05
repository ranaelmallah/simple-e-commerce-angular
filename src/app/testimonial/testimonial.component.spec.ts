import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TESTIMONIALComponent } from './testimonial.component';

describe('TESTIMONIALComponent', () => {
  let component: TESTIMONIALComponent;
  let fixture: ComponentFixture<TESTIMONIALComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TESTIMONIALComponent]
    });
    fixture = TestBed.createComponent(TESTIMONIALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
