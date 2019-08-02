import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../models/IProduct';
import {ProductService} from '../../services/ProductService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productService = new ProductService();

  products: IProduct[];

  constructor() {
  }

  ngOnInit() {
    this.products = this.productService.fetchAll();
  }

  search(keyword) {
    this.products = this.productService.search(keyword);
  }
}
