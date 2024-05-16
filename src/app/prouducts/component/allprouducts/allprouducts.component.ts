import { Component } from '@angular/core';
import { ProuductsService } from '../../services/prouducts.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-allprouducts',
  templateUrl: './allprouducts.component.html',
  styleUrls: ['./allprouducts.component.css']
})
export class AllprouductsComponent {
  allproduct:any=[]
  catagories:any=[]
  loading:boolean=false;
  cartproducts:any[]=[];

constructor(private _ProuductsService:ProuductsService){

this.getallproducts()
this.getallcatagory()
}
getallproducts(){
  this.loading=true;
  this._ProuductsService.getallproducts().subscribe((data) =>{
    this.loading=false
 this.allproduct= data;
 console.log("this is the product",this.allproduct)
  },error=>{
this.loading=false

    alert('error')});
}

getallcatagory(){
  this._ProuductsService.getallcatagories().subscribe((data) =>{
    this.loading=false

        this.catagories= data;
      console.log(this.catagories)})
}

filtercatagory(event:any){
  let value =event.target.value;
  if(value=="all"){
this.getallproducts()

  }else{
    this.getfilteredcatagory(value);
  }
}
getfilteredcatagory(keyword:string){
  this._ProuductsService.flitercatagory(keyword).subscribe((data)=>{
this.allproduct=data;
  })
}

addtocart(event:any){
  if("cart" in localStorage){
    this.cartproducts= JSON.parse(localStorage.getItem("cart")!);
  let exist=this.cartproducts.find(item=>item.item.id==event.item.id)
  if(exist){
    alert( "This item already added to cart");
  }else{
    this.cartproducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
console.log(event.item.id)
  }
}else{
   this.cartproducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));

  }

}
getitemid(itemid:number){


}
}
