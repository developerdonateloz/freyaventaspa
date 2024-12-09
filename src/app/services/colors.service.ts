import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorsDto } from '../models/colors-dto';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  urlBase:string;
  constructor(private http:HttpClient) { 
    this.urlBase = 'https://localhost:44314/color';
  }

  getAll(): Observable<ColorsDto[]> {
    return this.http.get<ColorsDto[]>(`${this.urlBase}`);
  }
  getById(id: number): Observable<ColorsDto> {
    return this.http.get<ColorsDto>(`${this.urlBase}/${id}`);
  }
  create(newColor: ColorsDto): Observable<ColorsDto> {
    return this.http.post<ColorsDto>(
      `${this.urlBase}/create`,
      newColor
    );
  }
  update(id:number, updatedColor: ColorsDto): Observable<ColorsDto> {
    return this.http.put<ColorsDto>(
      `${this.urlBase}/update/${id}`,
      updatedColor
    );
  }
  delete(id:number):Observable<boolean>{
    return this.http.delete<boolean>(`${this.urlBase}/delete/${id}`)
  }
}
