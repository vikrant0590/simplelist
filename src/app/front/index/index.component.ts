import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private service:CommonService

  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(true,true,false,false);

  }

}
