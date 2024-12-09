import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategoryCreateComponent } from './productcategory-create.component';

describe('ProductcategoryCreateComponent', () => {
  let component: ProductcategoryCreateComponent;
  let fixture: ComponentFixture<ProductcategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcategoryCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductcategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
