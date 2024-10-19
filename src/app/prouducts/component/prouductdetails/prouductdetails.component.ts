import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProuductsService } from '../../services/prouducts.service';


@Component({
  selector: 'app-prouductdetails',
  templateUrl: './prouductdetails.component.html',
  styleUrls: ['./prouductdetails.component.css']
})
export class ProuductdetailsComponent {
  id:any
  data:any={}
  loading:boolean=false;

constructor(private route :ActivatedRoute ,private router :Router ,private ProuductsService:ProuductsService){
this.id=this.route.snapshot.paramMap.get("id")
console.log(this.id)

}
ngOnInit() {
  // this.getproduct(  productId :Number)
  this.route.params.subscribe((res:Params)=>{
    const productId = Number(res['id'])
    this.getproduct(productId)
     console.log(`param ${res['id']}`)
   })

}
getproduct(productId:number){
  this.loading = true ;
  this.ProuductsService.getproductbyId(this.id).subscribe((res)=>{
  this.loading = false ;
    this.data=res

  }
,error=>{
  this.loading = false ;
  alert(error)
})
  console.log(this.data)
}
changeNext(){
  this.router.navigate(['details/7'])
}
}
