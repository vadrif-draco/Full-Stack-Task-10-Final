import { categoriesCollName, findInCollection, insertInCollection, productsCollName, convertToObjectId } from '../mongoutil';
import Product from '../interfaces/product.interface';
import { productModel } from '../models/product.model';

export async function addProduct(productData: Product) {

  try {
    let categories = await findInCollection(categoriesCollName, { _id: convertToObjectId(productData.category_id) })
    if (categories.length > 0) {
      return insertInCollection(productsCollName, productData)
    } else {
      throw `Category associated with product not found`
    }
  } catch (error) {
    throw error
  }

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