import { _GenericModel } from "./_generic"

class OrderModel extends _GenericModel {

  constructor() { super("Orders", "Order") }

}

export const orderModel = new OrderModel