import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { CategoryComponent } from './category/category.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { PaintingComponent } from './painting/painting.component';
import { ArtistsComponent } from './artists/artists.component';
import { AbstractComponent } from './abstract/abstract.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { TamatinaComponent } from './tamatina/tamatina.component';
import { ProductService } from './service/productService';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { ApiService } from './service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent,
    HomeComponent,
    RegistrationComponent,
    CategoryComponent,
    BlogComponent,
    CartComponent,
    AcrylicComponent,
    PaintingComponent,
    ArtistsComponent,
    AbstractComponent,
    SculpturesComponent,
    TamatinaComponent,
    CheckoutComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routes
  ],
  providers: [ProductService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
