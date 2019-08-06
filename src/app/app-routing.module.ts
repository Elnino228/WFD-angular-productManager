import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {NewProductComponent} from './components/new-product/new-product.component';
import {ProductDetailComponent} from './components/product-detail/product.component';
import {EditProductComponent} from './components/edit-product/edit-product.component';


const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'create', component: NewProductComponent},
  {path: 'edit/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
