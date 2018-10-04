import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(false,true,false,true);

  }

}
