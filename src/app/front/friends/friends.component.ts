import { Component, OnInit, ViewEncapsulation,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {CommonService} from '../../../services/common.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FriendsComponent implements OnInit {
   name = `<p>hello><p>`
  //  data=`<span class="list_name">My School Friends</span>
  //  <span class="list_qunatity">10 Friends</span>
  //  <span class="list_date">Created on: <span>Jun 6th, 2017</span></span>`
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private service: CommonService
  ) {}

  ngOnInit() {
    this.service.showHeaderFooter(true,true,false,false);

  }

  data(){
      return  `<span class="list_name">My School Friends</span>
       <span class="list_qunatity">10 Friends</span>
       <span class="list_date">Created on: <span>Jun 6th, 2017</span></span>`
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
