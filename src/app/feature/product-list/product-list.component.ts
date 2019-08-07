import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../core/models/Product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.fetchAll();
  }

  ngOnInit() {
  }

  search(keyword) {
    this.products = this.productService.search(keyword);
  }


}
