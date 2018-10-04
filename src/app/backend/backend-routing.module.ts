import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AmazonsettingsComponent } from './amazonsettings/amazonsettings.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { BillinginfoComponent } from './billinginfo/billinginfo.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { SettingComponent } from './setting/setting.component';
import { ReportComponent } from './report/report.component';
import { ProductComponent } from './product/product.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component:ChoosePlanComponent
  },
  {
    path : 'billinginfo',
    component:BillinginfoComponent
  },
  {
    path : 'accountdetails',
    component:AccountdetailsComponent
  },
  {
    path : 'amazonsettings',
    component:AmazonsettingsComponent
  },
  {
    path : 'home',
    component:HomeComponent
  },
  {
    path : 'data',
    component:DataComponent
  },
  {
    path : 'campaigns',
    component:CampaignsComponent
  },
  {
    path : 'products',
    component:ProductComponent
  },
  {
    path : 'product-detail',
    component:ProductDetailComponent
  },

  {
    path : 'reports',
    component:ReportComponent
  },
  {
    path : 'setting',
    component:SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
