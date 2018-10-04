import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,false,true);

  }

}
