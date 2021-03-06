import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListCompComponent } from './components/product-list-comp/product-list.component';
import { ProductCompComponent } from './components/product-comp/product.component';

@NgModule({
  declarations: [
    ProductListCompComponent,
    ProductCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListCompComponent,
    ProductCompComponent
  ]
})
export class ProductsModule { }
