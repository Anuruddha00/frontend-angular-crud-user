import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResgisterService } from '../../shared/resgister.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  message = '';

  constructor(private service : ResgisterService, private router : Router) { }

  ngOnInit() {
  }

  logUser(){
    this.service.logInUserFromRemote(this.user).subscribe(
      data=>{
                console.log("response received");
                this.router.navigate(['/products'])
            },
      error=>{
                console.log("exception occured");
                this.message = "Bad Credentials"
            }
    )
  }
  navRegistration(){
    this.router.navigate(['/register']) 
  }
}

