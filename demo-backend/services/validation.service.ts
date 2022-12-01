import Product from '../interfaces/product.interface';
import Category from '../interfaces/category.interface';
import User from '../interfaces/user.interface';
import Order from '../interfaces/order.interface';
import OrderItem from '../interfaces/orderItem.interface';

export function validateCategoryData(categoryData: Category): { status: boolean; message: string } {

  if (categoryData === null) return { status: false, message: "missing category" }

  if (categoryData.name === null) return { status: false, message: "missing category name" }
  if (typeof categoryData.name !== 'string') return { status: false, message: "invalid category name (must be a string)" }
  if (categoryData.name === "") return { status: false, message: "empty category name" }

  if (categoryData.image === null) return { status: false, message: "missing category image url" }
  if (typeof categoryData.image !== 'string') return { status: false, message: "invalid category image url (must be a string)" }
  if (categoryData.image === "") return { status: false, message: "empty category image url" }

  if (categoryData.productCount === null) return { status: false, message: "missing category product count" }
  if (typeof categoryData.productCount !== 'number') return { status: false, message: "invalid category product count (must be a number)" }

  if (categoryData.productCount === 0) return { status: false, message: "category product count cannot be 0" }

  return { status: true, message: "ok" }

}

export function validateProductData(productData: Product): { status: boolean; message: string } {

  if (productData === null) return { status: false, message: "missing product" }

  if (productData.name === null) return { status: false, message: "missing product name" }
  if (typeof productData.name !== 'string') return { status: false, message: "invalid product name (must be a string)" }
  if (productData.name === "") return { status: false, message: "empty product name" }

  if (productData.image === null) return { status: false, message: "missing product image url" }
  if (typeof productData.image !== 'string') return { status: false, message: "invalid product image url (must be a string)" }
  if (productData.image === "") return { status: false, message: "empty product image url" }

  if (productData.category_id === null) return { status: false, message: "missing product category id" }
  if (typeof productData.category_id !== 'string') return { status: false, message: "invalid product category id" }
  if (productData.category_id === "") return { status: false, message: "empty product category id" }

  if (productData.description === null) return { status: false, message: "missing product description" }
  if (typeof productData.description !== 'string') return { status: false, message: "invalid product xx (must be a string)" }
  if (productData.description === "") return { status: false, message: "empty product description" }

  if (productData.price === null) return { status: false, message: "missing product price" }
  if (typeof productData.price !== 'number') return { status: false, message: "invalid product price (must be a number)" }

  if (productData.discount === null) return { status: false, message: "missing product discount" }
  if (typeof productData.discount !== 'number') return { status: false, message: "invalid product discount (must be a number)" }

  if (productData.rating === null) return { status: false, message: "missing product rating" }
  if (typeof productData.rating !== 'number') return { status: false, message: "invalid product rating (must be a number)" }

  if (productData.rating_count === null) return { status: false, message: "missing product ratings count" }
  if (typeof productData.rating_count !== 'number') return { status: false, message: "invalid product ratings count (must be a number)" }

  if (productData.is_featured === null) return { status: false, message: "missing product is_featured flag" }
  if (typeof productData.is_featured !== 'boolean') return { status: false, message: "invalid product is_featured flag (must be a boolean)" }

  if (productData.is_recent === null) return { status: false, message: "missing product is_recent flag" }
  if (typeof productData.is_recent !== 'boolean') return { status: false, message: "invalid product is_recent flag (must be a boolean)" }

  return { status: true, message: "ok" }

}

export function validateLoginInfo(loginInfo: any): { status: boolean; message: string } {

  if (loginInfo === null) return { status: false, message: "missing login info" }

  if (loginInfo.email === null) return { status: false, message: "missing email field in login info" }
  if (typeof loginInfo.email !== 'string') return { status: false, message: "invalid email (must be a string)" }

  if (loginInfo.password === null) return { status: false, message: "missing password field in login info" }
  if (typeof loginInfo.password !== 'string') return { status: false, message: "invalid password (must be a string)" }

  return { status: true, message: "ok" }

}

export function validateRegistrationInfo(userRegistrationInfo: User): { status: boolean; message: string } {

  if (userRegistrationInfo === null) return { status: false, message: "missing registration info" }

  if (userRegistrationInfo.first_name === null) return { status: false, message: "missing first_name field in registration info" }
  if (typeof userRegistrationInfo.first_name !== 'string') return { status: false, message: "invalid first_name (must be a string)" }

  if (userRegistrationInfo.last_name === null) return { status: false, message: "missing last_name field in registration info" }
  if (typeof userRegistrationInfo.last_name !== 'string') return { status: false, message: "invalid last_name (must be a string)" }

  if (userRegistrationInfo.email === null) return { status: false, message: "missing email field in registration info" }
  if (typeof userRegistrationInfo.email !== 'string') return { status: false, message: "invalid email (must be a string)" }

  if (userRegistrationInfo.password === null) return { status: false, message: "missing password field in registration info" }
  if (typeof userRegistrationInfo.password !== 'string') return { status: false, message: "invalid password (must be a string)" }

  return { status: true, message: "ok" }

}

export function validateOrderData(orderData: Order): { status: boolean, message: string } {

  if (orderData === null) return { status: false, message: "missing order data" }

  if (orderData.shipping_info.first_name === null) return { status: false, message: "missing first_name field in order data shipping details" }
  if (typeof orderData.shipping_info.first_name !== 'string') return { status: false, message: "invalid first_name field in order data shipping details (expected string)" }

  if (orderData.shipping_info.last_name === null) return { status: false, message: "missing last_name field in order data shipping details" }
  if (typeof orderData.shipping_info.last_name !== 'string') return { status: false, message: "invalid last_name field in order data shipping details (expected string)" }

  if (orderData.shipping_info.email === null) return { status: false, message: "missing email field in order data shipping details" }
  if (typeof orderData.shipping_info.email !== 'string') return { status: false, message: "invalid email field in order data shipping details (expected string)" }

  if (orderData.shipping_info.mobile_number === null) return { status: false, message: "missing mobile_number field in order data shipping details" }
  if (typeof orderData.shipping_info.mobile_number !== 'string') return { status: false, message: "invalid mobile_number field in order data shipping details (expected string)" }

  if (orderData.shipping_info.address1 === null) return { status: false, message: "missing address1 field in order data shipping details" }
  if (typeof orderData.shipping_info.address1 !== 'string') return { status: false, message: "invalid address1 field in order data shipping details (expected string)" }

  if (typeof orderData.shipping_info.address2 !== 'string') return { status: false, message: "invalid address2 field in order data shipping details (expected string)" }

  if (orderData.shipping_info.country === null) return { status: false, message: "missing country field in order data shipping details" }
  if (typeof orderData.shipping_info.country !== 'string') return { status: false, message: "invalid country field in order data shipping details (expected string)" }

  if (orderData.shipping_info.city === null) return { status: false, message: "missing city field in order data shipping details" }
  if (typeof orderData.shipping_info.city !== 'string') return { status: false, message: "invalid city field in order data shipping details (expected string)" }

  if (typeof orderData.shipping_info.state !== 'string') return { status: false, message: "invalid state field in order data shipping details (expected string)" }

  if (orderData.shipping_info.zip_code === null) return { status: false, message: "missing zip_code field in order data shipping details" }
  if (typeof orderData.shipping_info.zip_code !== 'string') return { status: false, message: "invalid zip_code field in order data shipping details (expected string)" }

  if (orderData.sub_total_price === null) return { status: false, message: "missing subtotal price field in order data" }
  if (typeof orderData.sub_total_price !== 'number') return { status: false, message: "invalid subtotal price field type in order data (expected number)" }

  if (orderData.shipping === null) return { status: false, message: "missing shipping price field in order data" }
  if (typeof orderData.shipping !== 'number') return { status: false, message: "invalid shipping price field type in order data (expected number)" }

  if (orderData.total_price === null) return { status: false, message: "missing total price field in order data" }
  if (typeof orderData.total_price !== 'number') return { status: false, message: "invalid total price field type in order data (expected number)" }

  if (orderData.user_id === null) return { status: false, message: "missing user id for order data" }

  if (orderData.order_date === null) return { status: false, message: "missing order date for order data" }
  if (typeof orderData.order_date !== 'string') return { status: false, message: "invalid order date for order data (expected string)" }

  for (let item of orderData.order_details) {

    if (item.product_id === null) return { status: false, message: "missing field in an order item" }

    if (item.price === null) return { status: false, message: "missing price field in an order item" }
    if (typeof item.price !== 'number') return { status: false, message: "missing price field type in an order item (expected number)" }

    if (item.qty === null) return { status: false, message: "missing quantity field in an order item" }
    if (typeof item.qty !== 'number') return { status: false, message: "invalid quantity field type in an order item (expected number)" }

  }

  return { status: true, message: "ok" }

}