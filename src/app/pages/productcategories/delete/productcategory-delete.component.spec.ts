import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategoryDeleteComponent } from './productcategory-delete.component';

describe('ProductcategoryDeleteComponent', () => {
  let component: ProductcategoryDeleteComponent;
  let fixture: ComponentFixture<ProductcategoryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcategoryDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductcategoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
