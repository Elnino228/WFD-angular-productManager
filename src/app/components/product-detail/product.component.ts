import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
