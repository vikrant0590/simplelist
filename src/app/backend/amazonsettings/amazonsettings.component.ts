import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-amazonsettings',
  templateUrl: './amazonsettings.component.html',
  styleUrls: ['./amazonsettings.component.scss']
})
export class AmazonsettingsComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
   
    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,true,false);

  }

}
