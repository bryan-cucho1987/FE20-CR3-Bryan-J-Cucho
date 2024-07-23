import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Iproducts[] = [];
  total: number = 0;

  checkoutForm = this.fb.group({
    name: "",
    address: "",
  });


  constructor(private CS: CartService, private fb:
    FormBuilder) { }

  clearCart() {
    alert("Your cart has been cleared");
    this.cart = this.CS.clearCart();
  }

  onSubmit() {
    // alert("Your order has been submitted")
    alert("Your order has been submitted");
    this.checkoutForm.value;
    this.cart = this.CS.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.total = this.CS.calcTotal();
  }
}
