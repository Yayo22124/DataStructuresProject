import { Injectable } from '@angular/core';
import { OrderNode } from '../../models/order-node.model';

@Injectable({
  providedIn: 'root',
})
export class OrderPreparationService {
  // Queue (Colas)
  private front: OrderNode | null = null;
  private rear: OrderNode | null = null;

  enqueueOrder(ingredients: { [key: string]: boolean }): void {
    const newNode = new OrderNode(ingredients);

    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear!.next = newNode;
      this.rear = newNode;
    }
  }

  dequeueOrder(): { [key: string]: boolean } | null {
    if (!this.front) {
      return null; // Cola vacía
    }

    const dequeuedData = this.front.ingredients;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return dequeuedData;
  }

  markOrderAsFinished(): { [key: string]: boolean } | null {
    if (!this.front) {
      return null; // Cola vacía
    }

    const finishedOrder = this.front.ingredients;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return finishedOrder;
  }

  getOrdersInPreparation(): { [key: string]: boolean }[] {
    const orders: { [key: string]: boolean }[] = [];
    let current = this.front;

    while (current) {
      orders.push(current.ingredients);
      current = current.next;
    }

    return orders;
  }

  getPreparationCount(): number {
    return this.getOrdersInPreparation().length;
  }
}
