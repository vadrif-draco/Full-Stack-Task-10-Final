import {
  Express
} from 'express';

import {
  loginController,
  registerController
} from './controllers/user.controllers';

import {
  addOrderController,
  getOrdersController
} from './controllers/order.controllers';

import {
  addProductController,
  getFeaturedProductsController,
  getProductsController,
  getProductByIDController,
  getProductsByCategoryIDController,
  getRecentProductsController
} from './controllers/product.controllers';

import {
  addCategoryController,
  getCategoriesController
} from './controllers/category.controllers';
import { adminAuthGuard } from './admin.guard.middleware';

export function loadUsersRoutes(USERS: Express) {

  USERS.post("/login", loginController)
  USERS.post("/register", registerController)

}

export function loadOrdersRoutes(ORDERS: Express) {

  ORDERS.post("/", addOrderController)
  ORDERS.get("/", getOrdersController)

}

export function loadProductsRoutes(PRODUCTS: Express) {

  PRODUCTS.post("/", adminAuthGuard, addProductController)
  PRODUCTS.get("/", getProductsController)
  PRODUCTS.get("/getFeatured", getFeaturedProductsController)
  PRODUCTS.get("/getRecent", getRecentProductsController)
  PRODUCTS.get("/:id", getProductByIDController)
  PRODUCTS.get("/getByCategoryId/:cat_id", getProductsByCategoryIDController)

}

export function loadCategoriesRoutes(CATEGORIES: Express) {

  CATEGORIES.post("/", adminAuthGuard, addCategoryController)
  CATEGORIES.get("/", getCategoriesController)

}
