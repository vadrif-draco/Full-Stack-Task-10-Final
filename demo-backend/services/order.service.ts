import Order from '../interfaces/order.interface';
import { userModel } from '../models/user.model';
import { productModel } from '../models/product.model';
import { ordersCollName, insertInCollection } from '../mongoutil';
import { orderModel } from '../models/order.model';

export async function addOrder(orderData: Order) {

  try { await userModel.getItemByID(orderData.user_id) }
  catch (error) { throw `User with ID ${orderData.user_id} associated with order was not found; ${error}` }

  
  for (let item of orderData.order_details) {

    try { await productModel.getItemByID(item.product_id) }
    catch (error) { throw `Product with ID ${item.product_id} associated with order was not found; ${error}` }

  }

  return insertInCollection(ordersCollName, orderData)

}

export async function getOrdersArr(): Promise<Order[]> {

  return (await orderModel.getItemsArr())

}