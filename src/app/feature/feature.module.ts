import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditProductComponent} from './edit-product/edit-product.component';
import {NewProductComponent} from './new-product/new-product.component';
import {ProductDetailComponent} from './product-detail/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeatureRouting} from './feature-routing';
import {ActionComponent} from './action/action.component';
import {SharedModule} from '../shared/shared.module';
import {ProductService} from '../product.service';


@NgModule({
  declarations: [
    EditProductComponent,
    NewProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ActionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureRouting
  ],
  exports: [
    EditProductComponent,
    NewProductComponent,
    ProductListComponent
  ],
  providers: []
})
export class FeatureModule {
}
