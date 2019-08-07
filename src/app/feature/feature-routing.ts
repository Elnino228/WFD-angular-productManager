import {RouterModule, Routes} from '@angular/router';
import {NewProductComponent} from './new-product/new-product.component';
import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {AuthGuard} from '../auth.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'create', component: NewProductComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'edit/:id', component: EditProductComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRouting {
}
