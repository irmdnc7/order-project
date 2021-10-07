import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path: string = "http://localhost:3000/products"
  constructor(private httpClient: HttpClient) { }


   getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      this.path
    );
  }    

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.path + "?categoryId=" + categoryId);
  }
}
