import { ShareModule } from './../shared/share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import {OwlCarousel} from 'ngx-owl-carousel';

import { BackendRoutingModule } from './backend-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ReportComponent } from './report/report.component';
import { DataComponent } from './data/data.component';
import { ProductComponent } from './product/product.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { BillinginfoComponent } from './billinginfo/billinginfo.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AmazonsettingsComponent } from './amazonsettings/amazonsettings.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BackendRoutingModule,
    AccordionModule.forRoot(),
    ShareModule,
    TabViewModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgwWowModule,
    BsDatepickerModule.forRoot(),
    ScrollPanelModule,
    OwlModule,
  ],
  declarations: [HomeComponent, SettingComponent, ReportComponent, DataComponent, ProductComponent, ChoosePlanComponent, BillinginfoComponent, AccountdetailsComponent, AmazonsettingsComponent, CampaignsComponent, ProductDetailComponent]
})
export class BackendModule { }
