import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmedBottomsheetComponent } from './order-confirmed-bottomsheet.component';

describe('OrderConfirmedBottomsheetComponent', () => {
  let component: OrderConfirmedBottomsheetComponent;
  let fixture: ComponentFixture<OrderConfirmedBottomsheetComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [OrderConfirmedBottomsheetComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderConfirmedBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
