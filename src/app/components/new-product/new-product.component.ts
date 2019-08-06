import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../models/Product';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  formProduct: FormGroup;
  product: Product;

  @Output()
  pressSubmit = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
    this.formProduct = new FormGroup({
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
    this.pressSubmit.emit(this.product);
    this.initProduct();
  }

  initProduct() {
    this.product = new Product();
  }

}
