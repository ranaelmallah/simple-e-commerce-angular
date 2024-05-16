import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartproducts:any[]=[]
  total:any=0;
  show:boolean=false;
  sucess:boolean=false;

  constructor( private service:CartService){
    this.getcardproducts()
  }
  getcardproducts(){
    if("cart" in localStorage){
      this.cartproducts= JSON.parse(localStorage.getItem("cart")!);
  }
  this.getcarttotal()
}
detectchange(){
  this.getcarttotal()

}
getcarttotal(){
this.total=0;
for(let x in this.cartproducts ){
  this.total +=this.cartproducts[x].item.price*this.cartproducts[x].quantity
}}
addamount(index: number){
this.cartproducts[index].quantity++;
this.getcarttotal()

localStorage.setItem("cart",JSON.stringify(this.cartproducts));
}
minamount( index: number){
  this.cartproducts[index].quantity--;
  this.getcarttotal()
  localStorage.setItem("cart",JSON.stringify(this.cartproducts));
}
noitem(){
  if("cart" in localStorage){
    this.show=true;

  }else{
     this.show=false;
  }
}
deleteitem(index:number){
this.cartproducts.splice(index,1);
localStorage.setItem("cart",JSON.stringify(this.cartproducts));
this.getcarttotal()

}
clearitems(){
  this.cartproducts=[]
  localStorage.setItem("cart",JSON.stringify(this.cartproducts));
this.getcarttotal()

  // this.show=true;
}
addcart(){

  let products=this.cartproducts.map(item=>{
    return{title:item.item.title,price:item.item.price,description:item.item.description,image:item.item.image,category:item.item.category}
  })
  let model={
   products:products

}
this.service.createnewcart(model).subscribe(_res=>{
  this.sucess=true
})
console.log(products)

}
  }

