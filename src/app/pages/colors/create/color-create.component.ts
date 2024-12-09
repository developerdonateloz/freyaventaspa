import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ColorsService } from '../../../services/colors.service';
import { Router } from '@angular/router';
import { ColorsDto } from '../../../models/colors-dto';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-color-create',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './color-create.component.html',
  styleUrl: './color-create.component.scss'
})
export class ColorCreateComponent implements OnInit {
  colorForm!:FormGroup;
  idColor:number=0;
  testWord!:String;

  constructor(private service:ColorsService,
    private router:Router,
    private fb:FormBuilder,
    private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.colorForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]]
    })
  }

  onSave(){
    if(this.colorForm.valid){
      const newColor:ColorsDto={
        id: 0,
        name: this.colorForm.get('name')?.value
      };

      this.service.create(newColor).subscribe({
        next:value=>{
          this.toastr.success('Color registrado con éxito');
        },
        error:err=>{
          this.toastr.error(err);
        }
      })
    }
  }
  epaleTest(word:String){
    this.testWord=word;
    console.log(this.testWord);
  }
}
