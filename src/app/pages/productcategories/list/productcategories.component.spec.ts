import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategoriesComponent } from './productcategories.component';

describe('ProductcategoriesComponent', () => {
  let component: ProductcategoriesComponent;
  let fixture: ComponentFixture<ProductcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
