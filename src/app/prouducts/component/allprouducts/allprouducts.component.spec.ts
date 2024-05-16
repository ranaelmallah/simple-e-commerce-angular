import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprouductsComponent } from './allprouducts.component';

describe('AllprouductsComponent', () => {
  let component: AllprouductsComponent;
  let fixture: ComponentFixture<AllprouductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllprouductsComponent]
    });
    fixture = TestBed.createComponent(AllprouductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
