import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { };
  getProducts(){
     return this.http.get("https://dummyjson.com/products")
  };

  delteteProducts(id:number){
    return this.http.delete("https://dummyjson.com/products/"+id)
  }

}
