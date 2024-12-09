import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductcategoriesService } from '../../../services/productcategories.service';
import { ProductCategoryDto } from '../../../models/product-category-dto';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productcategory-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './productcategory-edit.component.html',
  styleUrl: './productcategory-edit.component.scss'
})
export class ProductcategoryEditComponent implements OnInit {
  id:number=0;
  productCategory?:ProductCategoryDto;
  productCategoryEditForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private route: ActivatedRoute, private router:Router, private service:ProductcategoriesService,private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.productCategoryEditForm=this.fb.group({
      name:['',[Validators.required,Validators.min(3)]]
    });

    this.route.params.subscribe(params=>{
      this.id=params['id'];
    })

    this.loadData();
  }
  
  loadData():void{
    this.service.getById(this.id).subscribe(data=>{
      this.productCategory=data;

      this.productCategoryEditForm.get('name')?.setValue(data.name);
    })
  }
  onSave(){

    const productEdited:ProductCategoryDto={
      name: this.productCategoryEditForm.get('name')?.value,
      id: this.id
    };
    this.service.update(this.id,productEdited).subscribe({
      next:(value)=>{
        this.toastr.success('Categoría editada con éxito');
        this.router.navigate(['/productcategories']);
      },
      error:(err)=>{
        console.log(err);
        this.toastr.error(err);
      }
    });
  }
}
