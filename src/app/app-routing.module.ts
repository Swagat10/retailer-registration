import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { ActionRetailerComponent } from './action-retailer/action-retailer.component';
import { UpdateRetailerComponent } from './update-retailer/update-retailer.component';



const routes: Routes = [
  
  {path:"register",component:AddRetailerComponent},
  {path:"search",component:ActionRetailerComponent},
  {path:"update",component:UpdateRetailerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent =[ AddRetailerComponent,ActionRetailerComponent]

