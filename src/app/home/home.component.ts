import { Component } from '@angular/core';
import { Iproducts } from '../iproducts';
import { product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Arrproduct: Iproducts[] = product

  showAlert() {
    alert("Sorry :( this dish is not available.");
  }
}
