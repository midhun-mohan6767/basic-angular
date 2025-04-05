import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculater',
  imports: [FormsModule],
  templateUrl: './calculater.component.html',
  styleUrl: './calculater.component.css'
})
export class CalculaterComponent {
  height:number=0;
  weight:number=0;
  bmi:number=0;
  calculate(){
    let total:number =(this.weight)/((this.height/100)**2);
    // alert(` the total bmi is : ${total}`)
    this.bmi=total;
    console.log(this.bmi);
    
  }

}

//w
