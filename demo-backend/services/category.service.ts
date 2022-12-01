import Category from '../interfaces/category.interface';
import { categoryModel } from '../models/category.model';
import { categoriesCollName, insertInCollection } from '../mongoutil';

export async function addCategory(categoryData: Category) {
  
  return insertInCollection(categoriesCollName, categoryData)

}

export async function getCategoriesArr(): Promise<Category[]> {

  return (await categoryModel.getItemsArr())

}