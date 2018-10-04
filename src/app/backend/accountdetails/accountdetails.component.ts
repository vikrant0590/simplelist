import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {

  constructor(
    private service: CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(false,true,true,false);
  }

}
