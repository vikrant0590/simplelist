import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {

  switch_expression = ''
  isCollapsed = true;

 constructor(private router : Router) { }

  ngOnInit() {
  }
  isCollase(){
    this.isCollapsed = !this.isCollapsed;
  }
  goToPage(link){
    this.router.navigate([link]);
  }
}
