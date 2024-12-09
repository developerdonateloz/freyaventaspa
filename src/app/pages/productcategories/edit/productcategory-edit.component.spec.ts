import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategoryEditComponent } from './productcategory-edit.component';

describe('ProductcategoryEditComponent', () => {
  let component: ProductcategoryEditComponent;
  let fixture: ComponentFixture<ProductcategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcategoryEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductcategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
