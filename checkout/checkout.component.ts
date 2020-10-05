import { Component, OnInit, NgZone } from '@angular/core';
import{Product} from '../model/product';

import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormGroup,FormControl, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  trending:Product[];
  grandTotal:number;
  submitted =false;
  angForm :FormGroup;
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService:ApiService
  
   
   
    ) {
      this.angForm=new FormGroup({
        name: new FormControl(null,[Validators.required]),
        email:new FormControl(null,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
        phoneNumber:new FormControl(null,[Validators.required]),
        address:new FormControl(null,[Validators.required]),
        city:new FormControl(null,[Validators.required]),
        state:new FormControl(null,[Validators.required]),
        zip:new FormControl(null,[Validators.required])
        // cardname:new FormControl(null,[Validators.required]),
        // cardnumber:new FormControl(null,[Validators.required]),
        // expmonth:new FormControl(null,[Validators.required]),
        // expyear:new FormControl(null,[Validators.required]),
        // cvv:new FormControl(null,[Validators.required])

      })
      
   
   }
   get name(){
     return this.angForm.get("name");
   }
   get email(){
    return this.angForm.get("email");
  }
  get phoneNumber(){
    return this.angForm.get("phoneNumber");
  }
  get address(){
    return this.angForm.get("address");
  }
  get city(){
    return this.angForm.get("city");
  }
  get state(){
    return this.angForm.get("state");
  }
  get zip(){
    return this.angForm.get("zip");
  }
  // get cardname(){
  //   return this.angForm.get("cardname");
  // }
  // get cardnumber(){
  //   return this.angForm.get("cardnumber");
  // }
  // get expmonth(){
  //   return this.angForm.get("expmonth");
  // }
  // get expyear(){
  //   return this.angForm.get("expyear");
  // }
  // get cvv(){
  //   return this.angForm.get("cvv");
  // }


  //  ngDoCheck() : void{
  //   this.grandTotal=0;
  //   this.trending.forEach(element =>{this.grandTotal+=element.price*element.quantity;});
  // }

  ngOnInit() {
  }
  
  onSubmit() {
    this.submitted = true;
    if (!this.angForm.valid) {
      return false;
    } else {
      this.apiService.createOrder(this.angForm.value).subscribe(
        (res) => {
          console.log('Order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('order'))
        }, (error) => {
          console.log(error);
        });
    }
  }
  

}
