import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var particlesJS: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _AuthService: AuthService , private _Router: Router) { }

  ngOnInit(): void {

    particlesJS.load('particles-js', 'assets/particlesjs-config.json');
  }

  errorMes: string = "";
  responseDone : string= "";

  signUpForm : FormGroup = new FormGroup ({

    firstName: new FormControl (null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl (null,  [Validators.required, Validators.minLength(3)]),
    email: new FormControl (null ,[Validators.required, Validators.email]),
    password: new FormControl (null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    cPassword: new FormControl (null, [Validators.required, Validators.pattern (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)])

    

  });

  signUp() {

 
    this._AuthService.register(this.signUpForm.value).subscribe(

      (res)=>{
        
        if (res.message == "Done") {
          this.responseDone= res.message
          this._Router.navigate(["/signIn"])
        }
      },
      (err)=>{this.errorMes = err.message}
    )

  }
}
