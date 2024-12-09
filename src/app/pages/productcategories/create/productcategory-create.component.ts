import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ProductCategoryDto } from '../../../models/product-category-dto';
import { ProductcategoriesService } from '../../../services/productcategories.service';
import { ToastComponent } from '../../../componentes/toast/toast.component';
import { ToastrService } from 'ngx-toastr';
import { ɵBrowserAnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-productcategory-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './productcategory-create.component.html',
  styleUrl: './productcategory-create.component.scss',
})
export class ProductcategoryCreateComponent implements OnInit {
  productCategoryForm!: FormGroup;
  idCategory: number = 0;

  constructor(
    private fb: FormBuilder,
    private service: ProductcategoriesService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.productCategoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSave(): void {
    if (this.productCategoryForm.valid) {
      const newProductCategory: ProductCategoryDto = {
        name: this.productCategoryForm.get('name')?.value,
        id: 0,
      };
      this.service.create(newProductCategory).subscribe({
        next: (value) => {
          this.idCategory = value.id;
          this.toastr.success('Categoría creada con éxito');
          this.router.navigate(['/productcategories']);
        },
        error: (err) => {
          console.log(err);
          this.toastr.error(err);
        },
      });
    }
  }
}
