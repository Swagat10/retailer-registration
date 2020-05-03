import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { ActionRetailerComponent } from './action-retailer/action-retailer.component';


const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:AddRetailerComponent},
  {path:"search",component:ActionRetailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
