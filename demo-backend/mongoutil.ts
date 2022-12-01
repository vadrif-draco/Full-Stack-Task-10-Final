import { MongoClient, Db, ObjectId } from "mongodb";

const databaseUri = "mongodb://localhost:27017"
const mainDatabaseName = "MultiShopDB"

// Only call if you want to erase everything in the database and re-populate with mock data
// _repopulate_database()

function _repopulate_database(databaseName = mainDatabaseName): void {

  let categoriesCollName = "Categories"
  let categoriesNum = 4

  let productsCollName = "Products"
  let productsNum = 9

  let vendorsCollName = "Vendors"
  let vendorsNum = 8

  _connect().then((ret: { connObj: MongoClient; dbObj: Db; }) => {

    ret.dbObj.dropDatabase()

  }).then(() => {

    createNewCollection(categoriesCollName).then(() => {

      for (let i = 1; i <= categoriesNum; i++) {

        insertInCollection(categoriesCollName, {

          name: `Category ${i}`,
          image: `assets/img/cat-${i}.jpg`,
          productCount: 5 + Math.floor(Math.random() * 95) // At least 5, at most 100, products in category

        })

      }

    })

  }).then(() => {

    createNewCollection(productsCollName).then(() => {

      for (let i = 1; i <= productsNum; i++) {

        let productCategoryNum = Math.floor(Math.random() * (categoriesNum - 1)) + 1

        findFieldInItemByFieldName(categoriesCollName, { name: `Category ${productCategoryNum}` }, "_id").then(

          (productCategoryId) => insertInCollection(productsCollName, {

            name: `Product ${i} Cat ${productCategoryNum}`,
            image: `assets/img/prod-${i}.jpg`,
            category_id: productCategoryId,
            description: `Product ${i} belongs to Category ${productCategoryNum}`,
            price: Math.floor(Math.random() * 500), // Max price 500$
            discount: Math.floor(Math.random() * 100) / 200.0, // Max discount 50% with two digit precision
            rating: Math.ceil(Math.random() * 10) / 2.0, // Max rating 5.0, ratings in .5 increments
            rating_count: Math.floor(Math.random() * 200), // Max rating count 200
            is_featured: Boolean(Math.round(Math.random())), // Random true or false
            is_recent: Boolean(Math.round(Math.random())) // Random rue or false

          })

        )

      }

    })

  }).then(() => {

    createNewCollection(vendorsCollName).then(() => {

      for (let i = 1; i <= vendorsNum; i++) {

        insertInCollection(vendorsCollName, {

          name: `Vendor ${i}`,
          image: `assets/img/vendor-${i}.jpg`

        })

      }

    })

  })

}

async function _connect(databaseName = mainDatabaseName): Promise<{ connObj: MongoClient, dbObj: Db }> {

  return new Promise((resolve, reject) => {

    MongoClient.connect(databaseUri, (err, dbconn) => {

      if (err) { reject(err) }
      else { resolve({ connObj: dbconn!, dbObj: dbconn!.db(databaseName) }) }

    })

  })

}

async function _collectionExists(collectionName: string) {

  try {

    let instance = await _connect()
    return (await instance.dbObj.listCollections({ name: collectionName }).toArray()).length > 0

  } catch (err) { return console.log(err) }

}

export async function createNewCollection(collectionName: string): Promise<void> {

  return new Promise(async (resolve, reject) => {

    try {

      if (await _collectionExists(collectionName)) {

        console.log(`Collection "${collectionName}" already exists, nothing to do`)
        resolve()

      } else {

        let instance = await _connect()
        instance.dbObj.createCollection(collectionName, (err, result) => {

          if (err) { console.log(`Error creating collection "${collectionName}": ${err}`) }
          else { console.log(`Collection "${collectionName}" created`) }
          resolve()
          // instance.connObj.close()

        })

      }

    } catch (err) { console.log(err) }

  })

}

export async function insertInCollection(collectionName: string, item: any) {

  return new Promise(async (resolve, reject) => {

    try {

      let instance = await _connect()
      instance.dbObj.collection(collectionName).insertOne(item, (err: any, result: any) => {

        if (err) { console.log(`Error inserting item in collection "${collectionName}": ${err}`) }
        else { console.log(`Item inserted into collection "${collectionName}" successfully`) }
        resolve(item._id || null)

      })

    } catch (err) { console.log(err) }

  })

}

export async function findInCollection(collectionName: string, query: any, options = {}): Promise<any> {

  return new Promise(async (resolve, reject) => {

    try {

      let instance = await _connect()
      instance.dbObj.collection(collectionName).find(query, { projection: options }).toArray((err, result) => {

        if (err) { console.log(`Error querying collection "${collectionName}": ${err}`) }
        else { console.log(`Query into collection "${collectionName}" succeeded`) }
        resolve(result)

      })

    } catch (err) { console.log(err) }

  })

}

export async function updateInCollection(collectionName: string, query = {}, updateSet: any, removeSet = {}) {

  return new Promise(async (resolve, reject) => {

    try {

      let instance = await _connect()
      instance.dbObj.collection(collectionName).updateOne(query, { $set: updateSet, $unset: removeSet }, (err, result) => {

        if (err) { console.log(`Error updating item in collection "${collectionName}": ${err}`) }
        else if (result!.matchedCount == 0) { console.log(`Item not found in "${collectionName}"`) }
        else { console.log(`Item updated in collection "${collectionName}" successfully`) }
        resolve(result!.matchedCount)

      })

    } catch (err) { console.log(err) }

  })

}

export async function findFieldInItemByFieldName(collectionName: string, query = {}, fieldName: string) {

  let lookupSet: any = {}
  lookupSet["_id"] = 0 // Have to manually exclude _id because it is always returned by default
  lookupSet[fieldName] = 1 // Then, only include the field we're look up

  return new Promise(async (resolve, reject) => {

    try {

      let instance = await _connect()
      instance.dbObj.collection(collectionName).findOne(query, { projection: lookupSet }, (err, result) => {

        if (err) { console.log(`Error finding field/item from collection "${collectionName}": ${err}`) }
        else if (!result || result['matchedCount'] == 0) { console.log(`Field/item not found in "${collectionName}"`) }
        else { console.log(`Item field retrieved from collection "${collectionName}" successfully`) }

        resolve(result![fieldName])

      })

    } catch (err) { console.log(err) }

  })

}

export async function removeFromCollection(collectionName: string, query = {}) {

  return new Promise(async (resolve, reject) => {

    try {

      let instance = await _connect()
      instance.dbObj.collection(collectionName).deleteOne(query, (err, result) => {

        if (err) { console.log(`Error removing item from collection "${collectionName}": ${err}`) }
        else if (result!.deletedCount == 0) { console.log(`Item not found in "${collectionName}"`) }
        else { console.log(`Item removed from collection "${collectionName}" successfully`) }
        resolve(result!.deletedCount)

      })

    } catch (err) { console.log(err) }

  })

}

export function convertToObjectId(ID: string) { return new ObjectId(ID) }

export function convertFromObjectId(objectId: ObjectId) { return objectId.toString() }