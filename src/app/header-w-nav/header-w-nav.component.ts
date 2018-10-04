import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header-w-nav',
  templateUrl: './header-w-nav.component.html',
  styleUrls: ['./header-w-nav.component.scss']
})
export class HeaderWNavComponent implements OnInit {
  isSearch = false;
  switch_expression = ''
  isCollapsed = true;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  isCollase(){
      this.isCollapsed = !this.isCollapsed;
  }
  searchList(){
    this.isSearch =true;
  }

 searchListClose(){
    this.isSearch =false;
  }

  goToPage(link){
    this.router.navigate([link]);
  }
}
