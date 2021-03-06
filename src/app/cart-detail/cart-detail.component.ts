import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart/cart-item';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartItems:CartItem[]=[]
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
  }

}
