import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(false,true,true,false);

  }

}
