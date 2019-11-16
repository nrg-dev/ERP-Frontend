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
  constructor(  private router: Router,) { }

  ngOnInit() {
    this.model.currentusername='';
    this.model.currentpassword='';
  }

  onClickSubmit(){
   // alert("login");
    console.log("user name : password"+this.model.currentusername+this.model.currentpassword);
    //if(this.user.status=="success") {                    
      localStorage.setItem('currentusername',this.model.currentusername);
      this.router.navigate(['/landingpage']);
  //} 

  }
}
