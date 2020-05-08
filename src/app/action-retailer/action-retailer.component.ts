import { Component, OnInit } from '@angular/core';
import { RetailerRegistrationService } from '../retailer-registration.service';

@Component({
  selector: 'app-action-retailer',
  templateUrl: './action-retailer.component.html',
  styleUrls: ['./action-retailer.component.css']
})
export class ActionRetailerComponent implements OnInit {

  retailers : any;
  retailer_Id: string;
  
  constructor(private service:RetailerRegistrationService) { }
  ngOnInit(): void {
    this.service.getRetailers().subscribe(data =>{this.retailers=data;})

  }


  public removeRetailer(retailer_Id:string){
    this.service.removeRetailers(retailer_Id).subscribe(data=>{
      console.log(data);
      this.service.getRetailers().subscribe(data=>{
        this.retailers=data;
      })
    },
    error=>console.log(error));
   }

   public update(index:string)
   {
     this.service.setRetailer(this.retailers[index]);
   }
   
   public findRetailersById(){
     let resp= this.service.findRetailers(this.retailer_Id);
     resp.subscribe((data)=>this.retailers=data);
    }

}
