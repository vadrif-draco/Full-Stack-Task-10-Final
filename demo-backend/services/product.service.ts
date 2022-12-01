import { categoriesCollName, findInCollection, insertInCollection, productsCollName } from '../mongoutil';
import Product from '../interfaces/product.interface';
import { productModel } from '../models/product.model';

export async function addProduct(productData: Product) {

  findInCollection(categoriesCollName, { _id: productData.category_id }).then(

    (value) => { insertInCollection(productsCollName, productData) },
    (error) => { throw `Category associated with product not found; ${error}` }

  )

}

export async function getProductsArr(): Promise<Product[]> {

  return (await productModel.getItemsArr())

}

export async function getFeaturedProductsArr(): Promise<Product[]> {

  return (await productModel.getItemsArr()).filter((product: Product) => product.is_featured)

}

export async function getRecentProductsArr(): Promise<Product[]> {

  return (await productModel.getItemsArr()).filter((product: Product) => product.is_recent)

}

export async function getProductById(id: string): Promise<Product> {

  return await productModel.getItemByID(id)

}

export async function getProductsByCategoryID(category_id: string): Promise<Product[]> {

  return productModel.getProductsByCategoryID(category_id)

}