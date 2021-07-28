import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../product/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


private baseURL = "http://localhost:8080/api/v1/product";

  constructor(private httpClient : HttpClient) { }

  getProductsList(): Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}`)
  }

  createProducts(product : Products): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,product)
  }

  getProductsById(product_id:number) : Observable<Products>{
    return this.httpClient.get<Products>(`${this.baseURL}/${product_id}`)
  }

  updateProducts(product_id:number, product:Products) : Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${product_id}`, product )
  }

  deleteProducts(product_id:number): Observable<Object> {
    return this.httpClient.delete<Object>(`${this.baseURL}/${product_id}`)
  }
}