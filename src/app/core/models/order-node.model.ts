export class OrderNode {
    constructor(public ingredients: { [key: string]: boolean }, public next: OrderNode | null = null) {}
  }
  