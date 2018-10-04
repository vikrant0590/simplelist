import { IndexComponent } from './index/index.component';
import { MytrophiesComponent } from './mytrophies/mytrophies.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsComponent } from './products/products.component';
import { FriendsDetailComponent } from './friends-detail/friends-detail.component';
import { FriendsComponent } from './friends/friends.component';
import { AboutpartnerComponent } from './aboutpartner/aboutpartner.component';
import { AboutconsumerComponent } from './aboutconsumer/aboutconsumer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydealsComponent } from './mydeals/mydeals.component';
import { SettingComponent } from './setting/setting.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
    {
      path : '',
      component:HomeComponent
    },
    {
      path : 'login',
     component:LoginComponent
    },
    {
      path : 'home',
     component:HomeComponent
      
    },
    {
      path : 'aboutconsumer',
      component:AboutconsumerComponent
    },
    {
      path : 'aboutpartner',
      component:AboutpartnerComponent
    },
    {
      path : 'friends',
      component:FriendsComponent
    },
    {
      path : 'index',
      component:IndexComponent
    },
    {
      path : 'friends-detail',
      component:FriendsDetailComponent
    },
    {
      path : 'products',
      component:ProductsComponent
    },
    {
      path : 'products-detail',
      component:ProductsDetailComponent 
    },
    {
      path : 'mytrophies',
      component:MytrophiesComponent 
    },
    {
      path : 'mydeals',
      component:MydealsComponent 
    },
    {
      path : 'setting',
      component:SettingComponent 
    },
    {
      path : 'wishlist',
      component:WishlistComponent 
    },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
