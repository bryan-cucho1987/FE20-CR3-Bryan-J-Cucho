import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Iproducts = {} as Iproducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService) { }

  addToCart() {
    alert("A new item has been added");
    this.CS.addToCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.product = product[this.id];
    })
  }
}
