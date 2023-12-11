import { Component, OnInit } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { OrderPreparationService } from 'src/app/core/services/OrderPreparation/order-preparation.service';

@Component({
  selector: 'app-prepare-order',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './prepare-order.component.html',
  styleUrl: './prepare-order.component.scss',
})
export class PrepareOrderComponent{
  ordersInPreparation: { [key: string]: boolean }[] = [];
  currentOrder: { [key: string]: boolean } = {};

  constructor(private orderPreparationService: OrderPreparationService) {}

  loadNextOrder(): void {
    this.currentOrder =
      this.orderPreparationService.getOrdersInPreparation()[0];
    this.ordersInPreparation =
      this.orderPreparationService.getOrdersInPreparation();
  }

  deleteOrder(): void {
    this.orderPreparationService.dequeueOrder();
    this.loadNextOrder();
  }

  completeOrder(): void {
    // Aquí puedes realizar cualquier acción adicional que desees antes de marcar la orden como completada
    this.orderPreparationService.markOrderAsFinished();
    this.loadNextOrder();
  }
}
