import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProuductsModule } from './prouducts/prouducts.module';
import { AllprouductsComponent } from './prouducts/component/allprouducts/allprouducts.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TESTIMONIALComponent } from './testimonial/testimonial.component';
import { CONTACTUSComponent } from './contact-us/contact-us.component';
import { FooterComponent} from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    WhyUsComponent,
    TESTIMONIALComponent,
    CONTACTUSComponent,
  FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProuductsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
