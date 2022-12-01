import { ObjectId } from 'mongodb';

export default interface Vendor {

  _id: ObjectId,
  name: string, // "vendor-1",
  image: string // "assets/img/vendor-1.jpg"

}