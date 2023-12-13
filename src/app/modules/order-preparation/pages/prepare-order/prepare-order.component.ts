import { Component, OnInit } from '@angular/core';

import { AnimationsService } from 'src/app/core/services/animations/animations.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderPreparationService } from 'src/app/core/services/OrderPreparation/order-preparation.service';

@Component({
  selector: 'app-prepare-order',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule, MatDividerModule],
  templateUrl: './prepare-order.component.html',
  styleUrl: './prepare-order.component.scss',
  animations: [AnimationsService.slideInFromRight]
})
export class PrepareOrderComponent implements OnInit {
  ordersInPreparation: { [key: string]: boolean }[] = [];
  currentOrder: { [key: string]: boolean } = {};
  length: Number = 0;

  constructor(
    private orderPreparationService: OrderPreparationService,
    private _snackbar: MatSnackBar,
    private animationService: AnimationsService
  ) {}
  ngOnInit(): void {
    this.loadNextOrder();
    this.getLength();
  }

  getLength(): void {
    this.length = this.orderPreparationService.getPreparationCount();
  }

  loadNextOrder(): void {
    this.currentOrder = this.orderPreparationService.getOrdersInPreparation()[0];
    this.ordersInPreparation = this.orderPreparationService.getOrdersInPreparation();
    console.warn(this.currentOrder);
  }

  deleteOrder(): void {
    this.orderPreparationService.dequeueOrder();
    this.loadNextOrder();
    this._snackbar.open(`Orden eliminada correctamente`, 'Cerrar', {
      duration: 1.5 * 1000,
    });
    this.getLength();
  }

  completeOrder(): void {
    // Aquí puedes realizar cualquier acción adicional que desees antes de marcar la orden como completada
    this.orderPreparationService.markOrderAsFinished();
    this.loadNextOrder();
    this._snackbar.open(`Orden completada`, 'Cerrar', {
      duration: 1.5 * 1000,
    });
    this.getLength();
  }
}
