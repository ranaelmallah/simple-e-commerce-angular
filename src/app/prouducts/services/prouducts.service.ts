import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProuductsService {

  constructor(private _HttpClient:HttpClient) {}
  getallproducts(){
    return this._HttpClient.get('https://fakestoreapi.com/products')
   }
   getallcatagories(){
    return this._HttpClient.get('https://fakestoreapi.com/products/categories')
   }
   flitercatagory(keyword:string){
    return this._HttpClient.get('https://fakestoreapi.com/products/category/'+keyword)
   }
   getproductbyId(id:any){
    return this._HttpClient.get('https://fakestoreapi.com/products/'+id)
   }
}
