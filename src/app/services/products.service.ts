import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDto } from '../models/product-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlBase:string;
  constructor(private http:HttpClient) { 
    this.urlBase = 'https://localhost:44314/product';
  }

  getAll(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${this.urlBase}`);
  }
  getById(id: number): Observable<ProductDto> {
    return this.http.get<ProductDto>(`${this.urlBase}/${id}`);
  }
  create(newProduct: ProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(
      `${this.urlBase}/create`,
      newProduct
    );
  }
  update(id:number, updatedProduct: ProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(
      `${this.urlBase}/update/${id}`,
      updatedProduct
    );
  }
  delete(id:number):Observable<boolean>{
    return this.http.delete<boolean>(`${this.urlBase}/delete/${id}`)
  }
}
