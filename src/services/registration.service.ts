import { Injectable } from '@angular/core';
import { Http,  Headers,  URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from "../environments/environment";
import {HttpHeaders,HttpClient} from '@angular/common/http';
const headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
@Injectable()
export class RegistrationService {
    private baseUrl: string = environment.apiurl;

    constructor(
        public http: HttpClient,

    ) {

}

userSignup(data) {
    // let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json',)
    return this.http.post(`${this.baseUrl}users/signup`,data, { headers: headers });
}
userSignin(data){
    console.log("Login data",data);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json',)
    return this.http.post(`${this.baseUrl}users/signin`,data, { headers: headers }); 
}
}
