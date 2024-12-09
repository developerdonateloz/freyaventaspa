import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCategoryDto } from '../models/product-category-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductcategoriesService {
  urlBase?: string;
  constructor(private http: HttpClient) {
    this.urlBase = 'https://localhost:44314/product-item';
  }

  getAll(): Observable<ProductCategoryDto[]> {
    return this.http.get<ProductCategoryDto[]>(`${this.urlBase}`);
  }
  getById(id: number): Observable<ProductCategoryDto> {
    return this.http.get<ProductCategoryDto>(`${this.urlBase}/${id}`);
  }
  create(newProduct: ProductCategoryDto): Observable<ProductCategoryDto> {
    return this.http.post<ProductCategoryDto>(
      `${this.urlBase}/create`,
      newProduct
    );
  }
  update(id:number, updatedProduct: ProductCategoryDto): Observable<ProductCategoryDto> {
    return this.http.put<ProductCategoryDto>(
      `${this.urlBase}/update/${id}`,
      updatedProduct
    );
  }
  delete(id:number):Observable<boolean>{
    return this.http.delete<boolean>(`${this.urlBase}/delete/${id}`)
  }
}
