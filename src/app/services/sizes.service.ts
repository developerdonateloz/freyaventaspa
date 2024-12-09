import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SizesDto } from '../models/sizes-dto';

@Injectable({
  providedIn: 'root'
})
export class SizesService {
  urlBase:string;
  constructor(private http:HttpClient) { 
    this.urlBase = 'https://localhost:44314/size';
  }

  getAll(): Observable<SizesDto[]> {
    return this.http.get<SizesDto[]>(`${this.urlBase}`);
  }
  getById(id: number): Observable<SizesDto> {
    return this.http.get<SizesDto>(`${this.urlBase}/${id}`);
  }
  create(newSize: SizesDto): Observable<SizesDto> {
    return this.http.post<SizesDto>(
      `${this.urlBase}/create`,
      newSize
    );
  }
  update(id:number, updatedSize: SizesDto): Observable<SizesDto> {
    return this.http.put<SizesDto>(
      `${this.urlBase}/update/${id}`,
      updatedSize
    );
  }
  delete(id:number):Observable<boolean>{
    return this.http.delete<boolean>(`${this.urlBase}/delete/${id}`)
  }
}
