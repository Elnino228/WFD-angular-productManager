import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../core/models/Product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  formProduct: FormGroup;
  product: Product;


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.formProduct = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', [Validators.required, Validators.min(0)])
    });

    this.initProduct();
  }

  get fields() {
    return this.formProduct.controls;
  }

  doAdd() {
    this.productService.add(this.product);
    this.initProduct();
  }

  initProduct() {
    this.product = new Product();
  }

}
