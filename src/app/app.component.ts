import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isHeaderUser = false;
  isFooter = false;
  isHeader = false;
  isBackEndHeader = false;
  private wowSubscription: Subscription;
  constructor(private router: Router, 
    private wowService: NgwWowService,
    private service :CommonService
  ){

    // this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
    //   // Reload WoW animations when done navigating to page,
    //   // but you are free to call it whenever/wherever you like
    //   this.wowService.init(); 
    // });

  }

  ngOnInit(){
    this.service.isHeaderUser.subscribe((res:any)=>{
      this.isHeaderUser = res;
      console.log("HeaderUser",this.isHeaderUser)
    })
    this.service.isFooter.subscribe((res:any)=>{
      this.isFooter = res;
      console.log("footer",this.isFooter)

    })
    this.service.isHeader.subscribe((res:any)=>{
      this.isHeader = res;
      console.log("Header",this.isHeader)

    })
    this.service.backendHeader.subscribe((res:any)=>{
      this.isBackEndHeader = res;
      console.log("BackEndHeader",this.isBackEndHeader)

    })

    this.router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        this.wowService.init(); 
          // this.loading = true;
      }
      if (route instanceof NavigationEnd) {
          // this.loading = false;
      }
  });
  }
}
