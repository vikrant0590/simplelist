import { Component, OnInit,ViewEncapsulation,  TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {CommonService} from '../../../services/common.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  modalRef: BsModalRef;
  showProfiles=false;
  constructor(
    private modalService: BsModalService,
    private service: CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(true,true,false,false);

  }
 
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'common-modal wishlist_Modal' })
    );
  }
  showProfile(){
    this.showProfiles = true;
  }

  closeMe(){
    this.showProfiles = false;
  }
}
