import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
name:string="";
Email:string="";
// phoneNu:number=0;
password:string=""


login(){
alert(`name is:${this.name},
       password is :${this.password},
       email is : ${this.Email}`)
}
}



// for the stylling we can use the start bootstrap.com
// step to use the template driven forms

// 1. import the forms module
// 2.create the property to store the values
// 3.then input tag nu ngModel kodukkukah
// 4.if we use the ngModel inside the form tag we use the name atribute
// now we created the template driven forms


// next we will validate the input 
    
    //1. validation is define in the onput tag  (required, email)
    //2. we want show a error msg below the i/p tag , we use the template ref variable
    //3. we will assign the template ref variable to the ng model ,because the ngModel will give the value ,we will validate int the value
    //4. we use to @if for the conditional rendering
    //5. we pass the condition as the templaRefVariable.touched&&tempRefVariable.invalid
    //6. then onley show the error msg
    //7. we pass the regular expression as th estring (pattern)
    //8. pattern will defined in the input tag
    //9. pattern="[a-zA-Z0-9]*"
    // then we will desabled the butten if the form is invalid
    //in the form we use ngForm 

    //1. in the form tag we will define the template ref varaiable to get the propertyies of the form in the form tag we will asign the ngform
    // ngForm directive contail the form related contents
    // in the butten we define the desable property


  // templatedriven form submission

  // 1.we can also use the click in the btn
  // 2.we can use the ng submit
      //1. create a function in the ts
      //2. put the type of the btn as the submitt
      //3. go to the form tag use the ngSbmitt assign to the function
      //4. now the function exicute by press the enter btn amd also the btn
      // *note : btn must be inside the form tag 



