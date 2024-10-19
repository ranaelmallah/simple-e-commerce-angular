import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProuductsModule } from './prouducts/prouducts.module';
import { PreloadAllModules } from '@angular/router';
import { AllprouductsComponent } from './prouducts/component/allprouducts/allprouducts.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProuductsModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
