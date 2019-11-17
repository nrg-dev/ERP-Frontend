import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  user:User;
  loading = false;
  passwordtype="password";

  constructor(  private router: Router,) { }

  ngOnInit() {
    this.model.currentusername='';
    this.model.currentpassword='';
  }

  onClickSubmit(){
    console.log("user name : password"+this.model.currentusername+this.model.currentpassword);
      localStorage.setItem('currentusername',this.model.currentusername);
      localStorage.setItem('currentpassword',this.model.currentpassword);
      this.router.navigate(['/landingpage']);
  }

  forgetPassword(){

  }

  showPassword(){
    if (this.passwordtype=="text"){
      this.passwordtype="password";

    }
    if (this.passwordtype=="password"){
      this.passwordtype="text";

    }
   // var x = document.getElementById("myInput");
  //if (x.type === "password") {
  //  x.type = "text";
  //} else {
  //  x.type = "password";
  //}
  }
}
