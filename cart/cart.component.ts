import { Component, OnInit } from '@angular/core';
import{Product} from '../model/product';
import{ProductService} from '../service/productService';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
     trending:Product[];
     grandTotal:number;
  constructor(private productService:ProductService) { 
    this.trending=this.productService.cart;
    this.grandTotal=0;
  }
  
  ngDoCheck() : void{
    this.grandTotal=0;
    this.trending.forEach(element =>{this.grandTotal+=element.price*element.quantity;});
  }

  
  ngOnInit(): void {
  }

}
