import { loadUsersRoutes, loadCategoriesRoutes, loadProductsRoutes, loadOrdersRoutes } from './routes';
import express from 'express';
import cors from 'cors'
const PORT = 3000;

// -----------------------------------------------------------------------------------------------
// Root app initialization -----------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// Create the root express app
const MAIN_APP = express()

// First thing I add to its middleware stack: JSON parsing
MAIN_APP.use(express.json())

// Enable CORS to allow for local testing between angular and express
MAIN_APP.use(cors())

// Then I add a custom middleware function to log requests
MAIN_APP.use((req: any) => { console.log(`${req.method}: ${req.url}`); req.next() })

// Note that since no path was provided, these middlewares will work for all child paths
console.log("Successfully initialized root express app.\n")

// -----------------------------------------------------------------------------------------------
// Routes/middlewares initialization -------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

console.log("Loading routes and their middlewares...")

const CATEGORIES = express()
loadCategoriesRoutes(CATEGORIES)
MAIN_APP.use("/categories/", CATEGORIES)

const PRODUCTS = express()
loadProductsRoutes(PRODUCTS)
MAIN_APP.use("/products/", PRODUCTS)

const ORDERS = express()
loadOrdersRoutes(ORDERS)
MAIN_APP.use("/orders/", ORDERS)

const USERS = express()
loadUsersRoutes(USERS)
MAIN_APP.use("/users/", USERS)

console.log("Successfully loaded all routes and their respective middlewares.\n")

// -----------------------------------------------------------------------------------------------
// Start express server --------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// Finally, we start listening on the predefined port

console.log(`Listening on port ${PORT}...`);
MAIN_APP.listen(PORT);
