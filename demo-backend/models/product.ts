import { convertToObjectId, findInCollection, categoriesCollName } from '../mongoutil';
import { _GenericModel } from "./_generic"

class ProductModel extends _GenericModel {

  constructor() { super("Products", "Product") }

  async getProductsByCategoryID(ID: string) {

    let categories = await findInCollection(categoriesCollName, { _id: convertToObjectId(ID) })
    if (categories.length != 0) {

      let products = await findInCollection(this.coll_name, { category_id: convertToObjectId(ID) })
      if (products.length != 0) { return products }
      else { throw `Category with ID ${ID} has no products associated with it yet` }

    }
    else { throw `Category with ID ${ID} does not exist` }

  }

}

export const productModel = new ProductModel