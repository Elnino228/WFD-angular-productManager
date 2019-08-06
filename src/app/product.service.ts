import {Injectable} from '@angular/core';
import {Product} from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'Iphone XS',
    description: 'Apple company',
    price: 30000000
  },
    {
      id: 2,
      name: 'Galaxy Note 10',
      description: 'Samsung company',
      price: 25000000
    },
    {
      id: 3,
      name: 'Xperia 2',
      description: 'Sony company',
      price: 20000000
    },
    {
      id: 4,
      name: 'Xiaomi Mi 9',
      description: 'Xiaomi company',
      price: 15000000
    }];

  constructor() {
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

  find(id) {
    return this.products.find(product => product.id === id);
  }

  save(product: Product) {
    const id = product.id - 1;
    this.products[id].name = product.name;
    this.products[id].description = product.description;
    this.products[id].price = product.price;
  }
}
