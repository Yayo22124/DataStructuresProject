import { RouterModule, Routes } from '@angular/router';

import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component:CreateOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRegisterRoutingModule { }
