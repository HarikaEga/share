import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/productService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  trending:Product[];
  constructor(private productService:ProductService) { 
    this.trending=this.productService.getProducts();
  }

  buy(id){
    let product=this.productService.getProduct(id);
    let myProduct=new Product();
    myProduct.productId=product.productId;
    myProduct.productName=product.productName;
    myProduct.price=product.price;
    myProduct.image=product.image;
    myProduct.quantity=1;
    this.productService.addToCart(myProduct);
    window.confirm("Added to cart");
  }

  ngOnInit(): void {
  }

  

}
