import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllprouductsComponent } from './prouducts/component/allprouducts/allprouducts.component';
import { ProuductdetailsComponent } from './prouducts/component/prouductdetails/prouductdetails.component';
// import { CartComponent } from './carts/components/cart/cart.component';
import { SharedModule } from './shared/shared.module';
// import { ProuductsModule } from './prouducts/prouducts.module';
import { CartsModule } from './carts/carts.module';
import { CartComponent } from './carts/components/cart/cart.component';


const routes: Routes = [
  {path:"Prouduct",component:AllprouductsComponent},
  {path:'details/:id',component:ProuductdetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**", redirectTo:"Prouduct",pathMatch:"full"}
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
