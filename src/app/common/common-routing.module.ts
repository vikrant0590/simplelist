import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'terms',
    component:TermsComponent
  },
  {
    path : 'policy',
    component:PolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
