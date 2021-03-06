/*it is mapped to the backend controllers class by the help of RESTFull api */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from './retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerRegistrationService {
  retailer: Retailer;

  constructor(private http:HttpClient) { }

  public doRegistration(retailer){
    return this.http.post("http://localhost:1998/retailer/new",retailer,{responseType:'text' as 'json'}); 
  }

  public getRetailers():Observable<any>{
    return this.http.get("http://localhost:1998/retailer");
  }

  public findRetailers(retailer_Id){
    return this.http.get("http://localhost:1998/retailer/"+retailer_Id);
  }

  public removeRetailers(retailer_Id):Observable<any>{
    return this.http.delete("http://localhost:1998/retailer/delete/"+retailer_Id);
  }

  public updateRetailers(value:any):Observable<Object>{
    return this.http.put("http://localhost:1998/retailer/update",value);
  }
   setRetailer(retailer:Retailer)
   {
     this.retailer=retailer;
   }
   getRetailer():Retailer
   {
     return this.retailer;
   }



}
