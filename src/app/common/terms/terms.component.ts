import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(false,true,true,false);

  }

}
