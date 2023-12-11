import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PrepareOrderComponent } from './pages/prepare-order/prepare-order.component';

const routes: Routes = [
  {
    path: '',
    component: PrepareOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPreparationRoutingModule { }
