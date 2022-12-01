import { userModel } from "../models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from '../interfaces/user.interface';

export async function loginUser(userLoginInfo: { email: string, password: string }) {

  try {

    let user = await userModel.getUserByEmail(userLoginInfo.email)

    // Validate credentials
    if (bcrypt.compareSync(userLoginInfo.password, user.password)) {

      return jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, '0') // Access Token

    } else { throw `Invalid credentials` } // Wrong password for provided username

  } catch (err) {

    throw `Invalid credentials` // Username not found

  }

}

export async function registerUser(userInfo: User) {

  // It will throw internally if user is not found, so we put the user creation code in the catch
  try {

    await userModel.getUserByEmail(userInfo.email)

  }
  catch (_) {

    userInfo.password = _hashPassword(userInfo.password)
    userInfo.isAdmin = false
    return userModel.addItem(userInfo)

  }

  // Otherwise, throw
  throw `Email "${userInfo.email}" is already registered! Please log in or use a different email.`

}

function _hashPassword(password: string) {

  let saltRounds = 10
  return bcrypt.hashSync(password, saltRounds)

}