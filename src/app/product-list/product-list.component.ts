import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProducListComponent implements OnInit {
  selected: Product;
  products: Product[];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.products = this.productService.getProducts();
  }

  removeItem(id) {
    this.products = this.productService.removeProduct(id);
  }

  changeStatus(){
    this.products
  }
  // changeName(e){
  //   this.product.name = e.target.value;
  // }

  // selected: Product;

  // showDetail(product){
  //   this.selected = product;
  //   console.log(product)
  // }
  // removeProduct(id){

  // }

  // name:  string = "Item 1 ";
  // price: number =24.99;
  // desc: string ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!";
  // status:  boolean = true;


}
