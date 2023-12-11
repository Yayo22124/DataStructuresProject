import { Injectable } from '@angular/core';
import { OrderNode } from '../../models/order-node.model';
import { OrderPreparationService } from '../OrderPreparation/order-preparation.service';

@Injectable({
  providedIn: 'root',
})
export class OrderRegisterService {
  // Stacks
  private top: OrderNode | null = null; // Nodo superior de la pila
  constructor(private preparationService: OrderPreparationService) {}

  pushOrder(ingredients: { [key: string]: boolean }): void {
    const newNode = new OrderNode(ingredients, this.top);
    this.top = newNode;
    console.log(newNode);

    // Después de agregar la orden a la pila, también encola la misma orden en el servicio de preparación
    this.preparationService.enqueueOrder(ingredients);
  }
  popOrder(): { [key: string]: boolean } | null {
    if (!this.top) {
      return null; // Pila vacía
    }

    const poppedData = this.top.ingredients;
    this.top = this.top.next;
    return poppedData;
  }

  getOrders(): { [key: string]: boolean }[] {
    const orders: { [key: string]: boolean }[] = [];
    let current = this.top;

    while (current) {
      orders.push(current.ingredients);
      current = current.next;
    }

    return orders.reverse();
  }

  getOrderCount(): number {
    return this.getOrders().length;
  }
}
