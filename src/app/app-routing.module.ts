import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllprouductsComponent } from './prouducts/component/allprouducts/allprouducts.component';
import { ProuductdetailsComponent } from './prouducts/component/prouductdetails/prouductdetails.component';
import { SharedModule } from './shared/shared.module';
import { ProuductsModule } from './prouducts/prouducts.module';
import { CartsModule } from './carts/carts.module';
import { CartComponent } from './carts/components/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TESTIMONIALComponent } from './testimonial/testimonial.component';
import { CONTACTUSComponent } from './contact-us/contact-us.component';
import { HomeProductComponent } from './prouducts/homeProducts/home-product/home-product.component';



const routes: Routes = [
  {path:"home",component:HomeComponent},
{path:"Prouduct",component:AllprouductsComponent},
  {path:"why us",component:WhyUsComponent},
  {path:"TESTIMONIAL",component:TESTIMONIALComponent},
  {path:"CONTACT-US",component:CONTACTUSComponent},
  {path:"cart",component:CartComponent},
  {path:'details/:id',component:ProuductdetailsComponent},
  {path:"", redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SharedModule],
  exports:
   [
    RouterModule
    ,SharedModule

    ]

})
export class AppRoutingModule { }
