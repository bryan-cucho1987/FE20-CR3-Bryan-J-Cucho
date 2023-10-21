import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "home/:id", component: ProductDetailsComponent
}, {
  path: "cart", component: CartComponent
}, {
  path: "home", component: HomeComponent
}, {
  path: "about-us", component: AboutUsComponent
}, {
  path: "gallery", component: GalleryComponent
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
