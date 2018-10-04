import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonService} from '../../../services/common.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DataComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,false,true);
  }

}
