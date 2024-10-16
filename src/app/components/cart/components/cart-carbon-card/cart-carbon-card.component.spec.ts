import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCarbonCardComponent } from './cart-carbon-card.component';

describe('CartCarbonCardComponent', () => {
  let component: CartCarbonCardComponent;
  let fixture: ComponentFixture<CartCarbonCardComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [CartCarbonCardComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCarbonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
