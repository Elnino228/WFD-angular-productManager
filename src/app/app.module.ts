import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooBarComponent } from './components/foo-bar/foo-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product.component';
import { ActionComponent } from './components/action/action.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewProductComponent } from './components/new-product/new-product.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    ActionComponent,
    NewProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
