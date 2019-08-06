import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/ProductService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Product[];

  constructor() {
  }

  ngOnInit() {
  }


}
