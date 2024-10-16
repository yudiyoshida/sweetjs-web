import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertButtonComponent } from './dessert-button.component';

describe('DessertButtonComponent', () => {
  let component: DessertButtonComponent;
  let fixture: ComponentFixture<DessertButtonComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [DessertButtonComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
