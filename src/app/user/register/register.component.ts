import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResgisterService } from '../../shared/resgister.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  message = '';

  constructor(private service: ResgisterService, private router: Router) { }

  ngOnInit() {
  }

  regUser() {
    console.log('USER_ : ' + JSON.stringify(this.user));
    this.service.registerUserFromRemote(this.user).subscribe(
      data => {

        const statusCode = data.statusCode;

        if (statusCode == 200 || statusCode == 201) {
          this.router.navigate(['/login'])
        }
        else if (statusCode == 409) {
          alert("User already exist");
        }

        // (statusCode == 200 || statusCode == 201)?  
        //   this.router.navigate(['/login']):
        //   (statusCode == 500)?
        //    alert("User already exist"):
        //    console.log("error");

        console.log({ data });
        console.log(data);
      }
    )
  }

  navLogin() {
    this.router.navigate(['/login'])
  }
}

