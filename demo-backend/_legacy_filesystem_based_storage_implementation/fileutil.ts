import { read, write } from './filemanip';

export async function getUsersArr() {
  return JSON.parse(await read("demo-backend/data/users.json") || "[]")
}

async function saveUsersArr(usersArr: []) {
  await write("users.json", JSON.stringify(usersArr))
}

export async function getOrdersArr() {
  return JSON.parse(await read("demo-backend/data/orders.json") || "[]")
}

async function saveOrdersArr(ordersArr: []) {
  await write("orders.json", JSON.stringify(ordersArr))
}

export async function getVendorsArr() {
  return JSON.parse(await read("demo-backend/data/vendors.json") || "[]")
}

async function saveVendorsArr(vendorsArr: []) {
  await write("vendors.json", JSON.stringify(vendorsArr))
}

export async function getProductsArr() {
  return JSON.parse(await read("demo-backend/data/products.json") || "[]")
}

async function saveProductsArr(productsArr: []) {
  await write("products.json", JSON.stringify(productsArr))
}

export async function getCategoriesArr() {
  return JSON.parse(await read("demo-backend/data/categories.json") || "[]")
}

async function saveCategoriesArr(categoriesArr: []) {
  await write("categories.json", JSON.stringify(categoriesArr))
}