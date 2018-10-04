import { NgwWowService } from 'ngx-wow';
import { Component, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-aboutconsumer',
  templateUrl: './aboutconsumer.component.html',
  styleUrls: ['./aboutconsumer.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AboutconsumerComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    private wowService:NgwWowService,
    private modalService: BsModalService,
    private router:Router,
    private service:CommonService
  ) { }
  ngOnInit() {
    this.service.showHeaderFooter(false,true,true,false);
    this.wowService.init();
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  gotoPlan(link){
    this.modalRef.hide();
    this.router.navigate([link]);
  }
}
