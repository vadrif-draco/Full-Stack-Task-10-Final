import { findInCollection } from "../mongoutil"
import { _GenericModel } from "./_generic.model"

class UserModel extends _GenericModel {

  constructor() { super("Users", "User") }

  async getUserByEmail(inputEmail: string) {

    let user = await findInCollection(this.coll_name, { email: inputEmail })
    if (user.length != 0) { return user[0] }
    else { throw `Couldn't get user with username "${inputEmail}"; user not found` }

  }

}

export const userModel = new UserModel