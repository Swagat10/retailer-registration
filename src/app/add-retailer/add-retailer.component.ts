/*This is component is for performing the addition of retailer functuion */


import { Component, OnInit } from '@angular/core';

import { RetailerRegistrationService } from '../retailer-registration.service';
import { Retailer } from '../retailer';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {


  retailer: Retailer = new Retailer();
  message: any;

  constructor(private service:RetailerRegistrationService) { }

  ngOnInit(){
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.retailer);
    resp.subscribe((data)=>this.message=data);
      }
}