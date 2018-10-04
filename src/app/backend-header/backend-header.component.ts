import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-backend-header',
  templateUrl: './backend-header.component.html',
  styleUrls: ['./backend-header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BackendHeaderComponent implements OnInit {

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
