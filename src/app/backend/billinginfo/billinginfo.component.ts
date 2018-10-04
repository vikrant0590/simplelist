import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-billinginfo',
  templateUrl: './billinginfo.component.html',
  styleUrls: ['./billinginfo.component.scss']
})
export class BillinginfoComponent implements OnInit {

  constructor(
    private service :CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(false,true,true,false)
  }

}
