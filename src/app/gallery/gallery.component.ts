import { Component } from '@angular/core';
import { Iproducts } from '../iproducts';
import { product } from '../product';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  Arrproduct: Iproducts[] = product
}
