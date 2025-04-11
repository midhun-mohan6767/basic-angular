import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:FormGroup;
  constructor(private fb:FormBuilder,private route:Router){
   this.loginForm=this.fb.group({
      id:["",[Validators.required,Validators.pattern("[0-9]*")]]

    })
    
  }
 
  login(){
    if(this.loginForm.valid){
      if(this.loginForm.get('id')?.value==2255){
        this.route.navigateByUrl("responsive")
          }else if(this.loginForm.get('id')?.value.length<1){
            alert('enter the id')
          }
          else{
            this.route.navigateByUrl("")
          }
        }else{
          alert("login form is invalid")
        }
      

    }

}
