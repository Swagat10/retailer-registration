import { Component, OnInit } from '@angular/core';
import { Retailer } from 'src/Retailer';
import { RetailerRegistrationService } from '../retailer-registration.service';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {


  retailer: Retailer = new Retailer("","","","","","","");
  message: any;

  constructor(private service:RetailerRegistrationService) { }

  ngOnInit(){
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.retailer);
    resp.subscribe((data)=>this.message=data);
      }
}