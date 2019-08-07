import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../core/models/Product';
import {ProductService} from '../../product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuthService} from '../../auth.service';

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
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) {
  }

  ngOnInit() {
  }

  check() {
    if (!this.authService.isAuthenticated()) {
      alert('You need login to edit new product');
    }
  }
}
