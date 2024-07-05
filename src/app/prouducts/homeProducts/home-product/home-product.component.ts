import { Component, EventEmitter, Output } from '@angular/core';
import { ProuductsService } from '../../services/prouducts.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent {
constructor( private _ProuductsService:ProuductsService){
  this.gethomeproducts()

}
homeProduct:any=[]
 loading:boolean=false;
gethomeproducts(){
this.loading=true
this._ProuductsService.getHomeProducts().subscribe((data:any)=>{
this.loading=false
  this.homeProduct=data;
  console.log( this.homeProduct)
})
}
  }
