import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEagerComponent } from './product-eager.component';

describe('ProductEagerComponent', () => {
  let component: ProductEagerComponent;
  let fixture: ComponentFixture<ProductEagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
