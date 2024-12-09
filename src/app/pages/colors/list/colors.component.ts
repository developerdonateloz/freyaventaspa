import { Component, OnInit } from '@angular/core';
import { ColorsDto } from '../../../models/colors-dto';
import { ColorsService } from '../../../services/colors.service';
import { ToastrService } from 'ngx-toastr';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [NgFor,RouterLink,SweetAlert2Module],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent implements OnInit {
  colorList:ColorsDto[]=[];

  constructor(private service:ColorsService, private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.service.getAll().subscribe({
      next:(value)=>{
        this.colorList=value;
      },
      error:(err)=>{
        this.toastr.error(err);
      }
    });
  }
  eliminar(id:number):void{
    this.service.delete(id).subscribe({
      next:value=>{
        this.toastr.success('Color eliminado con éxito')
      },
      error: err=>{
        this.toastr.error(err);
      }
    })
  }
}
