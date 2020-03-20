import { Injectable } from '@angular/core';
import { data } from './MockData';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProducts() {
    return this.products;
  }
  removeProduct(id) {
    return this.products.filter(product => product.id != id);
  }
  addProduct(product) {

    const newProduct = {
      id: 5, ...product, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      status: false,
      img: 'http://placehold.it/275x175'
    };
    this.products.push(newProduct);
    console.log(this.products)
  }
}