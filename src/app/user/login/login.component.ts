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

  constructor(private service: ResgisterService, private router: Router) { }

  ngOnInit() {
  }

  logUser() {
    this.service.logInUserFromRemote(this.user).subscribe(
      data => {

        const statusCode = data.statusCode;

        if (statusCode == 200 || statusCode == 201) {
          this.router.navigate(['/products'])
        }
        else if (statusCode == 401) {
          alert("Invalid User")
        }

        console.log({data})
      }
    )
  }
  navRegistration() {
    this.router.navigate(['/register'])
  }
}

