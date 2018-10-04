import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


@Injectable()

export class CommonService {
    public isHeaderUser = new BehaviorSubject<boolean>(null);
    public isFooter = new BehaviorSubject<boolean>(null);
    public isHeader = new BehaviorSubject<boolean>(null);

    public backendHeader = new BehaviorSubject<boolean>(null);
    constructor() {
    }

    showHeaderFooter(headUser,foot,head,backendHead) {
        console.log("COMMON SERVICE isProfile", headUser,foot)
        this.isHeaderUser.next(headUser);
        this.isFooter.next(foot);
        this.isHeader.next(head);
        this.backendHeader.next(backendHead);
     
    }
   
}