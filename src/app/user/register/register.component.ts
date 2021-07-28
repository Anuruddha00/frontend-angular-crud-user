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

  placements = ['top', 'left', 'right', 'bottom'];
  popoverTitle = 'Error ?' ;
  cancelText = 'Ok <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;

  user = new User();
  message = '';
  private userexist : boolean=false;

  constructor(private service : ResgisterService, private router: Router) { }

  ngOnInit() {
  }

  regUser(){
    console.log('USER_ : '+JSON.stringify(this.user));
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{
                console.log("response received");
                this.userexist=false;
                this.router.navigate(['/login'])
            },
      error=>{
                console.log("exception occured");
                this.userexist=true;
                this.message = error.error;
                
            }
    )
  }

  navLogin(){
    this.router.navigate(['/login'])
  }
}

