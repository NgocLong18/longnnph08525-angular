import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product: Product = {
    id: 1,
    name: "Item 1",
    price: 24.99 ,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    status: false,
    img: 'https://dummyimage.com/700x400/000/fff'
  }
  changeStatus(){
    this.product.status = !this.product.status;
  }
  changeName(e){
    this.product.name = e.target.value;
  }

}