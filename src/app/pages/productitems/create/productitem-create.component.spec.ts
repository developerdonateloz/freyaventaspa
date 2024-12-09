import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemCreateComponent } from './productitem-create.component';

describe('ProductitemCreateComponent', () => {
  let component: ProductitemCreateComponent;
  let fixture: ComponentFixture<ProductitemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductitemCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductitemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
