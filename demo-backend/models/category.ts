import { _GenericModel } from "./_generic"

class CategoryModel extends _GenericModel {

  constructor() { super("Categories", "Category") }

}

export const categoryModel = new CategoryModel