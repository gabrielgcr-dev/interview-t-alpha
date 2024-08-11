import { Injectable } from '@angular/core';
import { createProductDto } from '../dto/createProductDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { updateProductDto } from '../dto/updateProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseURL = "https://interview.t-alpha.com.br/api/products/";

  getAllProducts(): Observable<any> {
    return this.http.get<any[]>(this.baseURL + 'get-all-products');
  }

  getOneProduct(id: number): Observable<any> {
    return this.http.get<any[]>(this.baseURL + 'get-one-product/' + id);
  }

  createProduct(data: createProductDto): Observable<createProductDto> {
    return this.http.post<createProductDto>(this.baseURL + 'create-products', data);
  }

  updateProduct(data: updateProductDto): Observable<updateProductDto> {
    return this.http.patch<updateProductDto>(this.baseURL + 'update-products', data);
  }

  deleteProduct(id :number): Observable<any> {
    return this.http.delete<any[]>(this.baseURL + 'delete-product' + id);
  }
}