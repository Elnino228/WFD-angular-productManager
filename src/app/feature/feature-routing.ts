import {RouterModule, Routes} from '@angular/router';
import {NewProductComponent} from './new-product/new-product.component';
import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {EditProductComponent} from './edit-product/edit-product.component';

const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'create', component: NewProductComponent},
  {path: 'edit/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRouting {
}
