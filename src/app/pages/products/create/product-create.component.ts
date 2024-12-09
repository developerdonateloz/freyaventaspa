import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDto } from '../../../models/product-dto';
import { ProductcategoriesService } from '../../../services/productcategories.service';
import { ProductCategoryDto } from '../../../models/product-category-dto';
import { NgClass, NgFor } from '@angular/common';
import { ColorsDto } from '../../../models/colors-dto';
import { ColorsService } from '../../../services/colors.service';
import { SizesDto } from '../../../models/sizes-dto';
import { SizesService } from '../../../services/sizes.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgClass],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent implements OnInit {
  productForm!:FormGroup;
  idProducto:number=0;
  listCategories:ProductCategoryDto[]=[];
  listColors:ColorsDto[]=[];
  listSizez:SizesDto[]=[];

  constructor(private fb:FormBuilder,
    private service:ProductsService,
    private categoryService:ProductcategoriesService,
    private colorService:ColorsService,
    private sizeService:SizesService,
    private router:Router,
    private toastr:ToastrService
  ){

  }
  ngOnInit(): void {
    this.productForm=this.fb.group({
      name:['',[Validators.required,Validators.min(3)]],
      categoryid:['0',[Validators.required,Validators.min(1)]],
      colorid:['0',[Validators.required,Validators.min(1)]],
      sizeid:['0',[Validators.required,Validators.min(1)]]
    });

    this.categoryService.getAll().subscribe({
      next:(value)=>{
        this.listCategories=value;
      },
      error:(err)=>{
        this.toastr.error(err);
      }
    });
    
    this.colorService.getAll().subscribe({
      next:(value)=>{
        this.listColors=value;
      },
      error:(err)=>{
        this.toastr.error(err);
      }
    });

    this.sizeService.getAll().subscribe({
      next:value=>{
        this.listSizez=value;
      },
      error:err=>{
        this.toastr.error(err);
      }
    })
  }
  onSave():void{
    if(this.productForm.valid){
      const newProduct:ProductDto={
        id: 0,
        name: this.productForm.get('name')?.value,
        categoryProductName: '',
        productCategoryId: this.productForm.get('categoryid')?.value,
        colorId: this.productForm.get('colorid')?.value,
        sizeId: this.productForm.get('sizeid')?.value,
        colorName: '',
        sizeName: ''
      };
      this.service.create(newProduct).subscribe({
        next:(value)=>{
          this.toastr.success('Producto creado con éxito');
          this.router.navigate(['/products']);
        },
        error:(err)=>{
          this.toastr.error(err);
        }
      });
    }
  }
}
