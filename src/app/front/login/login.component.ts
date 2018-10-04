import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../services/common.service';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import {Router} from '@angular/router';
import {RegistrationService} from '../../../services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  signinForm:FormGroup;
  gender=[{gender:'Male',value:'male'},{gender:'Female',value:"female"},{gender:'Rather not say',value:'other'}];

  constructor(
    private service:CommonService,
    private fb: FormBuilder,
    private router:Router,
    private signupService:RegistrationService

  ) { 
    this.getInitialiseSignup();
    this.getInitialiseSignin();

  }

  public show:boolean = false;
  public buttonName:any = 'login';

  ngOnInit () {  
    this.service.showHeaderFooter(false,false,false,false);

  }
 

  getInitialiseSignup(){
    this.signupForm = this.fb.group({
      'firstname':[null,[Validators.minLength(2), Validators.maxLength(30),Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
      'lastname':[null,[Validators.minLength(2), Validators.maxLength(30),Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
      'gender':[null,[Validators.required]],
      'email': [null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      'username':[null,[Validators.required,Validators.pattern("^[a-zA-Z0-9]*$")]],
      'password':[null,[Validators.required,Validators.minLength(8)]],
      'confpassword':[null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      'termsAndCondition':[null,Validators.required]
    })
  }

  getInitialiseSignin(){
    this.signinForm = this.fb.group({
      'email': [null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      'password':[null,[Validators.required,Validators.minLength(8)]],
    })
  }

  toggle(val) {
    if(val=='login'){
      document.getElementById('registerSec').style.display = 'none';
      document.getElementById('loginSec').style.display = 'block';
      document.getElementById('bt1').style.display = 'none';
      document.getElementById('bt2').style.display = 'block';
      

    }else{
      document.getElementById('registerSec').style.display = 'block';
      document.getElementById('loginSec').style.display = 'none';
      document.getElementById('bt2').style.display = 'none';
      document.getElementById('bt1').style.display = 'block';
     }
  }

  register(link){
    console.log("Register Form data", this.signupForm);
    // if(this.signupForm.valid){
    //   var signUpdata = {
    //       "firstname":this.signupForm.value.firstname,
    //       "lastname":this.signupForm.value.lastname,
    //       "gender":this.signupForm.value.gender,
    //       "email":this.signupForm.value.email,
    //       "username":this.signupForm.value.username,
    //       "user_type":1,
    //       "password":this.signupForm.value.password
    //     }

    //     this.signupService.userSignup(signUpdata).subscribe((res:any)=>{
    //       console.log("SignApI response",res);

    //     })

    // }
    this.router.navigate([link]);
  
  }
  singnin(link){
    console.log("Login Form data", this.signinForm);
    this.router.navigate([link]);

    // this.signupService.userSignin(this.signinForm.value).subscribe((res:any)=>{
    //   console.log("SigninApI response",res);

    // })
  }

}
