import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderUserComponent implements OnInit {
  isSearch = false;
  switch_expression = ''
  isCollapsed = true;
  HeaderChoice=[true,false,false,false,false,false,false];
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

  goToPage(link,index){
   
    // for(var i=0 ;i < this.HeaderChoice.length;i++){
    //   if(i == index){
    //     this.HeaderChoice[i] =true;
    //   }else{
    //     this.HeaderChoice[i] =false;
    //   }

    // }
      this.router.navigate([link]);

    
    
  }
}
