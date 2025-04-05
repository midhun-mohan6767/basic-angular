import { Component } from '@angular/core';
ReactiveFormsModule
// autherwise we will import on the reactive form module inside the app component
// for the template forms we need to forms module

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  loginForm:FormGroup;
constructor(private fb:FormBuilder){
this.loginForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]
})
}

login(){
  
  if(this.loginForm.valid){
    alert(`
      name is:${this.loginForm.value.email},

      password is: ${this.loginForm.value.password}
      `)

  }else{
    alert("invalid form")
  }
}


}


//    MODEL DRIVEN FORMS


// * fist we create the model form inside the component class
// * form builder :clas consist of reactive form building methods

// reactive form consist of 
//  * form group :corresponding the form tag
//  * form Array : form input to be stored as the array
//  * form controll :used to link html input tag with the form group

// steps
//  1.import the reactive form module in the import array
//  2.to get the method form the form builder class we use the dependancy injection
//  3.so create the constructor
//  4.


//  in the html 
// 1.formmum form group ayittu ore connection vanam
    //1. formgrop ayittu bind cheyukkah
    //2. text box um form array le oror alkarim connction venam
    // 3. two way binding nadakkanam engil name atribute upayogikkanam
    // 4.property ayittu connection varan form controll name


