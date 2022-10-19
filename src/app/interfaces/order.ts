import { Product } from './product';

export interface OrderItem {
  product: Product;
  quantity: number;
}

export class Order {
  items: OrderItem[] = [];
  inc(p: Product) {
    let existingItem: OrderItem | undefined = this.items.find(
      (orderItem) => orderItem.product._id == p._id
    );
    if (existingItem !== undefined) existingItem.quantity++;
    else this.items.push({ product: p, quantity: 1 });
  }
  dec(p: Product) {
    let existingItem: OrderItem = this.items.find(
      (orderItem) => orderItem.product._id == p._id
    )!;
    existingItem.quantity--;
    if (existingItem.quantity == 0)
      this.items.splice(this.items.indexOf(existingItem), 1);
  }
  del(p: Product) {
    let existingItem: OrderItem = this.items.find(
      (orderItem) => orderItem.product._id == p._id
    )!;
    this.items.splice(this.items.indexOf(existingItem), 1);
  }
  subtotal(): number {
    if (this.items.length)
      return this.items
        .map((item) => (1 - item.product.discount) * item.product.price * item.quantity)
        .reduce((accumulator, value) => (accumulator += value));
    else return 0;
  }
  shipping(): number {
    return this.subtotal() * 0.1;
  }
  total(): number {
    return this.subtotal() + this.shipping();
  }
}
