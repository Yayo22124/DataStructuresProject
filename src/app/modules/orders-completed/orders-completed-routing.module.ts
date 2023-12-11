import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrdersCompletedComponent } from './pages/orders-completed/orders-completed.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersCompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersCompletedRoutingModule { }
