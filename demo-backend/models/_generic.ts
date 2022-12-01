import { createNewCollection, insertInCollection, findInCollection, updateInCollection, findFieldInItemByFieldName, removeFromCollection, convertToObjectId } from "../mongoutil"

export class _GenericModel {

  coll_name: string // Collection name
  item_label: string // Model label (ex: Product, Category, etc.)
  static created_collections: string[] = []

  constructor(coll: string, item_label: string) {

    this.coll_name = coll
    this.item_label = item_label

    if (!_GenericModel.created_collections.includes(this.coll_name)) {

      createNewCollection(this.coll_name)
      _GenericModel.created_collections.push(this.coll_name)

    }

  }

  async getItemsArr(query = {}, options = {}) {

    return await findInCollection(this.coll_name, query, options)

  }

  async addItem(itemToAdd: any) {

    if (itemToAdd) { return await insertInCollection(this.coll_name, itemToAdd) }
    else { throw `Couldn't add ${this.item_label}; invalid ${this.item_label} data provided` }

  }

  async getItemByID(ID: string) {

    let item = await findInCollection(this.coll_name, { _id: convertToObjectId(ID) })
    if (item && item.length != 0) { return item[0] }
    else { throw `Couldn't get ${this.item_label} with ID ${ID}; ${this.item_label} not found` }

  }

  async updateItemByID(ID: string, updateSet: any, removeSet: {} | undefined) {

    let matchedCount = await updateInCollection(this.coll_name, { _id: convertToObjectId(ID) }, updateSet, removeSet)
    if (matchedCount != 0) { return ID }
    else { throw `Couldn't update ${this.item_label} with ID ${ID}; ${this.item_label} not found` }

  }

  async getValueByIDandFieldName(ID: string, fieldName: string) {

    let fieldValue = await findFieldInItemByFieldName(this.coll_name, { _id: convertToObjectId(ID) }, fieldName)
    if (fieldValue != null) { return fieldValue }
    else { throw `Couldn't find requested field (${fieldName}) in ${this.item_label} with ID ${ID}` }

  }

  async deleteItemByID(ID: string) {

    let deletedCount = await removeFromCollection(this.coll_name, { _id: convertToObjectId(ID) })
    if (deletedCount != 0) { return ID }
    else { throw `Couldn't delete ${this.item_label} with ID ${ID}; ${this.item_label} not found` }

  }

}