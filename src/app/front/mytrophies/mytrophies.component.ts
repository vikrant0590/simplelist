import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service';
@Component({
  selector: 'app-mytrophies',
  templateUrl: './mytrophies.component.html',
  styleUrls: ['./mytrophies.component.scss']
})
export class MytrophiesComponent implements OnInit {

  constructor(
    private service :CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(true,true,false,false);

  }

}
