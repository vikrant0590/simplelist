import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CampaignsComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,false,true);
  }

}
