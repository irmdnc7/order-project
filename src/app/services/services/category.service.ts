import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  path : string = "http://localhost:3000/categories"

  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.path);
  }
}
