import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
