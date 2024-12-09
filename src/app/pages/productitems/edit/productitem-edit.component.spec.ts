import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemEditComponent } from './productitem-edit.component';

describe('ProductitemEditComponent', () => {
  let component: ProductitemEditComponent;
  let fixture: ComponentFixture<ProductitemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductitemEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
