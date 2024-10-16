import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertImageComponent } from './dessert-image.component';

describe('DessertImageComponent', () => {
  let component: DessertImageComponent;
  let fixture: ComponentFixture<DessertImageComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [DessertImageComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
