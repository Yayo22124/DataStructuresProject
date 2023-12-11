import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  // Default
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    // Home Module
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    // Exercises Main Route
    path: 'restaurant',
    children: [
      {
        // Stacks Module
        path: 'order-register',
        loadChildren: () =>
          import('./modules/order-register/order-register.module').then((m) => m.OrderRegisterModule),
      },
      {
        // Tails Module
        path: 'order-preparation',
        loadChildren: () =>
          import('./modules/order-preparation/order-preparation.module').then((m) => m.OrderPreparationModule),
      },
      {
        // Tails Module
        path: 'orders-completed',
        loadChildren: () =>
          import('./modules/orders-completed/orders-completed.module').then((m) => m.OrdersCompletedModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
