import { Component, inject, OnInit } from '@angular/core';
import { ProductitemsService } from '../../../services/productitems.service';
import { ProductItemDto } from '../../../models/product-item-dto';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productitems',
  standalone: true,
  imports: [RouterLink,NgFor,SweetAlert2Module,DatePipe,CurrencyPipe],
  templateUrl: './productitems.component.html',
  styleUrl: './productitems.component.scss'
})
export class ProductitemsComponent implements OnInit {
  productitemservice=inject(ProductitemsService);
  toastService=inject(ToastrService);

  itemsList:ProductItemDto[]=[];

  ngOnInit(): void {
    this.productitemservice.getAll().subscribe({
      next:(data)=>{
        this.itemsList=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  eliminar(id:number){

  }
  downloadFile(){
    this.productitemservice.getXlsAll().subscribe({
      next:(blob:Blob)=>{
        this.productitemservice.saveFile(blob,'example.xlsx');
      },
      error:(err)=>{
        this.toastService.error(err);
      }
    })
  }
}
