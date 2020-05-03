import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionRetailerComponent } from './action-retailer/action-retailer.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { RetailerRegistrationService} from './retailer-registration.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActionRetailerComponent,
    AddRetailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RetailerRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 