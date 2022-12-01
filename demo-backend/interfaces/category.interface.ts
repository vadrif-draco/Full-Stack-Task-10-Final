import { ObjectId } from 'mongodb';

export default interface Category {

  _id: ObjectId, // ObjectId('6388e021f6b5782e1b17811b'),
  name: string, // "Category 1",
  image: string, // "assets/img/cat-1.jpg",
  productCount: number, // 3

}