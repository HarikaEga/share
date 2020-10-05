import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router'; //module for implementing routing

import { AppComponent } from './app.component';
import{HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent}  from './contactus/contactus.component';
import { CategoryComponent } from './category/category.component';
import { RegistrationComponent } from './registration/registration.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ArtistsComponent } from './artists/artists.component';
import { PaintingComponent } from './painting/painting.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { AbstractComponent } from './abstract/abstract.component';
import { TamatinaComponent } from './tamatina/tamatina.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    {path:'category',component:CategoryComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'cart',component:CartComponent ,children:[ {path:'checkout',component:CheckoutComponent}]},
    {path:'blog',component:BlogComponent},
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contactus', component: ContactusComponent },
    {path:'artist',component: ArtistsComponent},
    {path:'painting',component:PaintingComponent},
    {path:'acrylic',component:AcrylicComponent},
    {path:'sculp',component:SculpturesComponent},
    {path:'abstract',component:AbstractComponent},
    {path:'tamatina',component:TamatinaComponent},
    {path: 'order' , component:OrdersComponent}
   
   

];


export const routes : ModuleWithProviders = RouterModule.forRoot(router);
