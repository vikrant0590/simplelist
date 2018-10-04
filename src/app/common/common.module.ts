import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { ShareModule } from '../shared/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    CommonRoutingModule,
    ShareModule
  ],
  declarations: [TermsComponent, PolicyComponent]
})
export class CommonsModule { }
