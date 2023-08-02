import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { BestSellerComponent } from './components/home/best-seller/best-seller.component';
import { SaleComponent } from './components/home/sale/sale.component';
import { OurProductsComponent } from './components/home/our-products/our-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewsComponent } from './components/home/reviews/reviews.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AccountComponent } from './components/account/account.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    HomeComponent,
    BestSellerComponent,
    SaleComponent,
    OurProductsComponent,
    FooterComponent,
    ReviewsComponent,
    CheckoutComponent,
    AccountComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    AllProductsComponent,
    CartItemComponent,
    ProductItemComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
