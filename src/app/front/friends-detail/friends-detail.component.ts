import { Component, OnInit, ViewEncapsulation,TemplateRef } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-friends-detail',
  templateUrl: './friends-detail.component.html',
  styleUrls: ['./friends-detail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FriendsDetailComponent implements OnInit {
  name = `<p>hello><p>`
  //  data=`<span class="list_name">My School Friends</span>
  //  <span class="list_qunatity">10 Friends</span>
  //  <span class="list_date">Created on: <span>Jun 6th, 2017</span></span>`
  constructor() { }

  ngOnInit() {
  }

  data(){
      return  `<span class="list_name">My School Friends</span>
       <span class="list_qunatity">10 Friends</span>
       <span class="list_date">Created on: <span>Jun 6th, 2017</span></span>`
  }

}