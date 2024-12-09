import { Component, OnInit } from '@angular/core';
import { ProductcategoriesService } from '../../../services/productcategories.service';
import { ProductCategoryDto } from '../../../models/product-category-dto';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productcategories',
  standalone: true,
  imports: [NgFor, RouterLink, SweetAlert2Module],
  templateUrl: './productcategories.component.html',
  styleUrl: './productcategories.component.scss',
})
export class ProductcategoriesComponent implements OnInit {
  listCategories: ProductCategoryDto[] = [];

  constructor(
    private router:Router,
    private service: ProductcategoriesService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.loadCategories();
  }
  loadCategories():void{
    this.service.getAll().subscribe({
      next: (data) => {
        this.listCategories = data;
      },
      error: (err) => {
        console.error('Error al consumir api', err);
      },
    });
  }
  eliminar(id: number) {
    console.log(id);
    this.service.delete(id).subscribe({
      next:(data)=>{
        if(data){
          this.toastr.success('Categoría eliminada exitósamente');
          this.loadCategories();
        }
      },
      error:(err)=>{
        this.toastr.success('Error al eliminar categoría');
      }
    });
    
  }
}
