import {Product} from '../models/Product';
import {OnInit} from '@angular/core';

export class ProductService implements OnInit {
  products: Product[];
  constructor() {
    this.products = [
      {
        name: 'Iphone XS',
        description: 'Apple company',
        price: 30000000
      },
      {
        name: 'Galaxy Note 10',
        description: 'Samsung company',
        price: 25000000
      },
      {
        name: 'Xperia 2',
        description: 'Sony company',
        price: 20000000
      },
      {
        name: 'Xiaomi Mi 9',
        description: 'Xiaomi company',
        price: 15000000
      }
    ];
  }

  ngOnInit(): void {
  }


  fetchAll(): Product[] {
    return this.products;
  }

  add(product: Product) {
    this.products.push(product);
    console.log(this.products);
  }

  search(keyword: string): Product[] {
    return this.fetchAll()
      .filter(value => value.name.toLowerCase().indexOf(keyword.trim().toLowerCase()) > -1);
  }
}
