import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
     path:'',
     loadChildren:'./front/front.module#FrontModule'
  },
  {
    path:'front',
    loadChildren:'./front/front.module#FrontModule'
  },
  {
    path:'common',
    loadChildren:'./common/common.module#CommonsModule'
  },
  {
    path:'backend',
    loadChildren:'./backend/backend.module#BackendModule'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
