import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { ProuductsModule } from '../prouducts/prouducts.module';
// import { CartsModule } from '../carts/carts.module';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    // ProuductsModule,
    // CartsModule,
  ],
  exports:[HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule ,
    // ProuductsModule,
    // CartsModule,
    RouterModule]
})
export class SharedModule { }
