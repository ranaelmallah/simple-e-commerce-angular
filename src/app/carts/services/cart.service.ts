import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private _http:HttpClient) { }
  createnewcart(model:any){
    return this._http.post('https://fakestoreapi.com/carts',model)
  }
}
