import { HeaderWNavComponent } from './../../header-w-nav/header-w-nav.component';
import { HeaderUserComponent } from './../../header-user/header-user.component';
import { UserHeaderComponent } from './../../user-header/user-header.component';
import { FooterComponent } from './../../footer/footer.component';
import { HeaderComponent } from './../../header/header.component';
import { SidebarComponent } from './../../sidebar/sidebar.component';
import { BackendHeaderComponent } from './../../backend-header/backend-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { OwlCarousel } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-bootstrap';
import { BsDropdownModule} from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    OwlModule,
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserHeaderComponent,
    HeaderUserComponent,
   BackendHeaderComponent,
   HeaderWNavComponent,

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserHeaderComponent,
    HeaderUserComponent,
    BackendHeaderComponent,
    HeaderWNavComponent,
  ]
})
export class ShareModule { }
