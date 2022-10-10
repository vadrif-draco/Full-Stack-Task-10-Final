import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/header/topbar/topbar.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FeaturedComponent } from './components/home/featured/featured.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { OfferComponent } from './components/home/offer/offer.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ShopSidebarComponent } from './components/shop/shop-sidebar/shop-sidebar.component';
import { ShopProductComponent } from './components/shop/shop-product/shop-product.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesItemComponent } from './components/home/categories/categories-item/categories-item.component';
import { FeaturedItemComponent } from './components/home/featured/featured-item/featured-item.component';
import { RecentComponent } from './components/home/recent/recent.component';
import { RecentItemComponent } from './components/home/recent/recent-item/recent-item.component';
import { BannersComponent } from './components/home/banners/banners.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    NavbarComponent,
    CarouselComponent,
    FeaturedComponent,
    CategoriesComponent,
    OfferComponent,
    HomeComponent,
    ShopComponent,
    BreadcrumbComponent,
    ShopSidebarComponent,
    ShopProductComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    CategoriesItemComponent,
    FeaturedItemComponent,
    RecentComponent,
    RecentItemComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
