import { NgwWowService } from 'ngx-wow';
import { Component, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {CommonService} from '../../../services/common.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  
  constructor(
    private wowService:NgwWowService,
    private modalService: BsModalService,
    private service:CommonService
  ) { }
  ngOnInit() {

    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,false,true);
    this.wowService.init();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
