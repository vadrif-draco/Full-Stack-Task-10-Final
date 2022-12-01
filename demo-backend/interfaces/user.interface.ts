import { ObjectId } from 'mongodb';

export default interface User {

  _id: ObjectId,
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  isAdmin: boolean

}