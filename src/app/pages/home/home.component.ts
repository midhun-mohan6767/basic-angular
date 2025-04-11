import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppendPipe } from '../../pipes/append.pipe';
@Component({
  selector: 'app-home',
  imports: [FormsModule,DatePipe,AppendPipe,UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name:string="hellowworld"
  img:string="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  email:string=""
  userActive:boolean=false;
  arrayItem:string[]=["ramu","damu","somu","gomu","depu","komu"];
  today:Date=new Date();
  data:string="pipes data  :"
  contents:string=" pipes are useed to convert the data in to the one formate to the anotherformate tp generate the pipe we use the cmd ng g p pipe name, then we use the transform function to transform the data in to the another formate the trans form function have the two angument the 1 arg is the data to be tranfered then 2 is the how the data to be tranforme we can use the custom pipe or the buld in pipes buld in pipes are upperPipe,lowerpipe,date"

  clickbtn(){
    alert("button clicked!!")
  }


  getname(event:any){
console.log(event.target.value);


  }

  getAge(age:any){
    console.log(age.value);
    
  }




}

