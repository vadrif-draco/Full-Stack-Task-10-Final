import { _GenericModel } from "./_generic"

class UserModel extends _GenericModel {

  constructor() { super("Users", "User") }

}

export const userModel = new UserModel