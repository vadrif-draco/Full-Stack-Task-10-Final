import { findInCollection } from "../mongoutil"
import { _GenericModel } from "./_generic"

class ProductModel extends _GenericModel {

  constructor() { super("Products", "Product") }

  async getProductsByCategoryID(ID: string) {

    let items = await findInCollection(this.coll_name, { category: ID })
    if (items.length != 0) { return items }
    else { throw `Category with ID ${ID} has no products associated with it yet` }

  }

}

export const productModel = new ProductModel