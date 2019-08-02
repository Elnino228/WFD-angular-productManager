import {IProduct} from '../models/IProduct';

export class ProductService {
  fetchAll(): IProduct[] {
    return [
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

  search(keyword: string): IProduct[] {
    return this.fetchAll()
      .filter(value => value.name.toLowerCase().indexOf(keyword.trim().toLowerCase()) > -1);
  }
}
