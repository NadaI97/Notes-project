import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var particlesJS: any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private _AuthService:AuthService  , private _Router: Router  ) { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particlesjs-config.json');

  }

  errorMes: string = "";
  responseDone : string= "";

  signInForm : FormGroup = new FormGroup ({

    email: new FormControl (null ,[Validators.required, Validators.email]),
    password: new FormControl (null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),

    

  });

  signIn() {

    this._AuthService.login(this.signInForm.value).subscribe(

      (res)=>{
          
        if (res.message == "Welcome") {
          this.responseDone= res.message
          this._AuthService.userData(res.token)
          this._Router.navigate(["/profile"])
        }
      },
      (err)=>{this.errorMes = err.message}
    )    

  }
}
