/*This is component is for performing the updation of retailer functuion */
/*This component is redirected from action-retailer component. */

import { Component, OnInit,ViewChild} from '@angular/core';
import { RetailerRegistrationService } from '../retailer-registration.service';
import { NgForm } from '@angular/forms';
import { Retailer } from '../retailer';


@Component({
  selector: 'app-update-retailer',
  templateUrl: './update-retailer.component.html',
  styleUrls: ['./update-retailer.component.css']
})
export class UpdateRetailerComponent implements OnInit {
@ViewChild("formdata")
form:NgForm;

/*This file takes data from its html and suscribes to the service */
  constructor(private service:RetailerRegistrationService) { }

  retailer : Retailer = new Retailer();

  ngOnInit(): void {
    this.retailer = this.service.getRetailer();
  }

  updateRetailer(){
    this.service.updateRetailers(this.retailer).subscribe(data=>{alert("Updated Successfully!");  
  },
  error=>
  {
    alert("Updated");
    console.log("error Occured",error)
    
  })

}

}
