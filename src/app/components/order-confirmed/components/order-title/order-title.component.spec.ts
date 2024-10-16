import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTitleComponent } from './order-title.component';

describe('OrderTitleComponent', () => {
  let component: OrderTitleComponent;
  let fixture: ComponentFixture<OrderTitleComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [OrderTitleComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
