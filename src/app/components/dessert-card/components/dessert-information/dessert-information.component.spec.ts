import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertInformationComponent } from './dessert-information.component';

describe('DessertInformationComponent', () => {
  let component: DessertInformationComponent;
  let fixture: ComponentFixture<DessertInformationComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [DessertInformationComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
