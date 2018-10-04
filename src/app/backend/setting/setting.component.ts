import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  showProfiles=false;
  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,false,true);

  }
  showProfile(){
    this.showProfiles = true;
  }

  closeMe(){
    this.showProfiles = false;
  }
}

