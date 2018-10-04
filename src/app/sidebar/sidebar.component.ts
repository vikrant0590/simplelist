import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  isSuggestion=false;
  isSchoolList=false;
  isSidebar=false;
  constructor() { }

  ngOnInit() {
  }
  sidebtn(){
    this.isSidebar =!this.isSidebar;
  }
  suggest(){
    this.isSuggestion =!this.isSuggestion;
  }
  sclist(){
    this.isSchoolList =!this.isSchoolList;
  }
}
