import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../../services/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private service:CommonService
  ) { }

  ngOnInit() {
    this.service.showHeaderFooter(false,true,true,false);
  }
  consumer(link){
    this.router.navigate([link]);
}
}
