import { Component, Inject, inject, OnInit } from '@angular/core';
import { ProductitemsService } from '../../../services/productitems.service';
import { ProductItemDto } from '../../../models/product-item-dto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../../services/products.service';
import { ProductDto } from '../../../models/product-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productitem-create',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgFor],
  templateUrl: './productitem-create.component.html',
  styleUrl: './productitem-create.component.scss'
})
export class ProductitemCreateComponent implements OnInit {
  productItemService=inject(ProductitemsService);
  productService=inject(ProductsService);
  fb=inject(FormBuilder);
  toastService=inject(ToastrService);
  router=inject(Router);

  productItemForm!:FormGroup;
  productList:ProductDto[]=[];

  ngOnInit(): void {
    this.productItemForm=this.fb.group({
      productid:[0,[Validators.required,Validators.min(1)]],
      fechacompra:['',Validators.required],
      preciocompra:[0,[Validators.required,Validators.min(1)]],
      precioventa:[0,[Validators.required,Validators.min(1)]],
    });

    this.productService.getAll().subscribe({
      next:(data)=>{
        this.productList=data;
      },
      error:(err)=>{
        this.toastService.error(err);
      }
    })
  }
  onSave(){
    if(this.productItemForm.invalid){
      this.toastService.error('Datos incorrectos');
      this.productItemForm.markAllAsTouched();
      return;
    }

    const newProductItem:ProductItemDto={
      id: 0,
      fechaCompra: this.productItemForm.get('fechacompra')?.value,
      precioCompra: this.productItemForm.get('preciocompra')?.value,
      precioVenta: this.productItemForm.get('precioventa')?.value,
      productId: this.productItemForm.get('productid')?.value,
      productName: ''
    }
    this.productItemService.create(newProductItem).subscribe({
      next:()=>{
        this.toastService.success('Item registrado con éxito');
        this.router.navigate(['/productitems'])
      },
      error:(err)=>{
        this.toastService.error(err);
      }
    })
  }
}
