import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-array-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './array-crud.component.html',
  styleUrl: './array-crud.component.css'
})
export class ArrayCrudComponent {
userList:FormGroup;
value:string;
last:string="";



  users:string[]=["ramu",'damu',"gomu",'somu','memu','gemu','gamu','hamu','depu','sepu','gepu']
constructor(private fb:FormBuilder){
  this.userList=this.fb.group({
    user:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    update:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]]

  })
 this.value=this.userList.get('user')?.value



}

  delete(){
    this.users.pop()
  }
 

  add(){
if(this.userList.get('user')?.valid){
  this.users.push(this.userList.get('user')?.value)
  alert("item added successfuley!");
  this.userList.patchValue({
    user:""
  })


} else{
  alert('invalid form!!')
}   
  }
  // update(item:string,i:number){
//  let fi= this.id+=i
 
  // let  id= this.users.indexOf(i)
    // this.userList.patchValue({
    //   update: item

    // }); 
    // // console.log(id);
    // console.log( typeof i);
    
    
  // }

submit(){
  this.users.push(this.userList.get('update')?.value)

}

final(i:number,item:string){
if(this.userList.get('update')?.valid){
  this.users[i]=this.userList.get('update')?.value;
  alert(this.userList.get('update')?.value+"   is added successfulley");
    this.userList.patchValue({
      update: this.last

    }); 
  }else{
  alert("invaild form!!")
}

}
}