import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { ShopFilterSidebarComponent } from './components/shop/shop-filter-sidebar/shop-filter-sidebar.component';
import { ShopProductAreaComponent } from './components/shop/shop-product-area/shop-product-area.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesItemComponent } from './components/home/categories/categories-item/categories-item.component';
import { FeaturedItemComponent } from './components/home/featured/featured-item/featured-item.component';
import { RecentComponent } from './components/home/recent/recent.component';
import { RecentItemComponent } from './components/home/recent/recent-item/recent-item.component';
import { BannersComponent } from './components/home/banners/banners.component';
import { ShopProductAreaItemComponent } from './components/shop/shop-product-area/shop-product-area-item/shop-product-area-item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistItemComponent } from './components/wishlist/wishlist-item/wishlist-item.component';
import { ShopProductAreaViewComponent } from './components/shop/shop-product-area/shop-product-area-view/shop-product-area-view.component';
import { ShopProductAreaSortComponent } from './components/shop/shop-product-area/shop-product-area-sort/shop-product-area-sort.component';
import { ShopProductAreaPagesizeComponent } from './components/shop/shop-product-area/shop-product-area-pagesize/shop-product-area-pagesize.component';
import { ShopProductAreaPaginationComponent } from './components/shop/shop-product-area/shop-product-area-pagination/shop-product-area-pagination.component';
import { ProductDetailsComponent } from './components/detail/product-details/product-details.component';
import { ProductRecommendationsComponent } from './components/detail/product-recommendations/product-recommendations.component';

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
    ShopFilterSidebarComponent,
    ShopProductAreaComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    CategoriesItemComponent,
    FeaturedItemComponent,
    RecentComponent,
    RecentItemComponent,
    BannersComponent,
    ShopProductAreaItemComponent,
    CartItemComponent,
    WishlistComponent,
    WishlistItemComponent,
    ShopProductAreaViewComponent,
    ShopProductAreaSortComponent,
    ShopProductAreaPagesizeComponent,
    ShopProductAreaPaginationComponent,
    ProductDetailsComponent,
    ProductRecommendationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
