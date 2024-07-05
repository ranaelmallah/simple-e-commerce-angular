import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  cartproducts:any[]=[];
constructor(private route :ActivatedRoute ,private ProuductsService:ProuductsService){
this.id=this.route.snapshot.paramMap.get("id")
console.log(this.id)
}
ngOnInit() {
  this.getproduct();
}
getproduct(){
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



}
