import {Component} from '@angular/core';
import {Product} from './models/Product';
import {ProductService} from './services/ProductService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-product-detail';
  productService = new ProductService();
  products: Product[];


  constructor() {
    this.products = this.productService.fetchAll();
  }

  add(product: Product) {
    this.products.push(product);
  }
  search(keyword) {
    this.products = this.productService.search(keyword);
  }
}
