import { Component, OnInit } from '@angular/core';
import{CommonService} from '../../../services/common.service'
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(
    private service:CommonService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.service.showHeaderFooter(false,true,false,true);
  }

}
