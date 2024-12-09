import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductItemDto } from '../models/product-item-dto';
import { Fileresponse } from '../models/fileresponse';
import * as FileServer from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ProductitemsService {

  urlBase?:String;
  constructor(private http:HttpClient) {
    this.urlBase='https://localhost:44314/product-item';
   }

  getAll():Observable<ProductItemDto[]>{
    return this.http.get<ProductItemDto[]>(`${this.urlBase}`);
  }
  getXlsAll():Observable<Blob>{
    return this.http.get(`${this.urlBase}/GetXlsAll`,{responseType:'blob'});
  }
  saveFile(blob:Blob,filename:string){
    FileServer.saveAs(blob,filename);
  }
  create(newProductItem:ProductItemDto):Observable<boolean>{
    return this.http.post<boolean>(`${this.urlBase}/create`,newProductItem)
  }
}
