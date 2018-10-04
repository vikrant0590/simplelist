import { ShareModule } from './../shared/share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { PopoverModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import {RouterModule} from '@angular/router'
import { AccordionModule } from 'ngx-bootstrap';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgwWowModule } from 'ngx-wow';
import { AboutconsumerComponent } from './aboutconsumer/aboutconsumer.component';
import { AboutpartnerComponent } from './aboutpartner/aboutpartner.component';
import { FriendsComponent } from './friends/friends.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { FriendsDetailComponent } from './friends-detail/friends-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';


import { OwlModule } from 'ngx-owl-carousel';
import {OwlCarousel} from 'ngx-owl-carousel';
import { MytrophiesComponent } from './mytrophies/mytrophies.component';
import { MydealsComponent } from './mydeals/mydeals.component';
import { IndexComponent } from './index/index.component';
import { SettingComponent } from './setting/setting.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// servicelist
import {RegistrationService} from '../../services/registration.service';
@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    NgwWowModule,
    TabViewModule,
    ModalModule.forRoot(),
    ScrollPanelModule,
    OverlayPanelModule,
    PopoverModule.forRoot(),
    ShareModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    OwlModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule

    
  ],
  declarations: [HomeComponent, LoginComponent, AboutconsumerComponent, AboutpartnerComponent, FriendsComponent, FriendsDetailComponent, ProductsComponent, ProductsDetailComponent, MytrophiesComponent, MydealsComponent, IndexComponent, SettingComponent, WishlistComponent, ],
  providers:[RegistrationService]
})
export class FrontModule { }
