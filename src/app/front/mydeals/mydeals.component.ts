import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-mydeals',
  templateUrl: './mydeals.component.html',
  styleUrls: ['./mydeals.component.scss']
})
export class MydealsComponent implements OnInit {

  constructor(
    private service : CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(true,true,false,false);

  }

}
