import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashbord',
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
allProducts:any=[]

constructor(private api:ApiService){};

ngOnInit(){
  this.getProducts()
}

getProducts(){
  this.api.getProducts().subscribe((res:any)=>{
    console.log(res.products);
    this.allProducts=res.products;
    // heare res is object ore arraylek akanam
  })
}


}

