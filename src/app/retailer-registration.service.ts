import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetailerRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(retailer){
    return this.http.post("http://localhost:1997/add-retailer",retailer,{responseType:'text' as 'json'}); 
  }
}
