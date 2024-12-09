import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../../../models/product-dto';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProductsService } from '../../../services/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,RouterLink,SweetAlert2Module],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  listProducts:ProductDto[]=[];
  constructor(private service:ProductsService,private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts():void{
    this.service.getAll().subscribe({
      next:(value)=>{
        this.listProducts=value;
      }
    })
  }
  eliminar(id:number):void{
    this.service.delete(id).subscribe({
      next:(value)=>{
        this.toastr.success('Producto eliminado exitosamente');    
      },
      error:(err)=>{
        this.toastr.error('Error al eliminar.');
      }
    });
    
  }
}
