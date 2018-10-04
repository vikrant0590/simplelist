import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service';
@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss']
})
export class ChoosePlanComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,true,false);
  }

}
