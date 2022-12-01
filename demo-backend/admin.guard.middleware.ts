import { Request, Response, NextFunction } from "express"
import { userModel } from './models/user.model';
import jwt from 'jsonwebtoken';

export async function adminAuthGuard(req: Request, res: Response, next: NextFunction) {

  let adminAuthToken: string = req.headers['authorization']!

  let tokenDetails: any

  try { tokenDetails = jwt.verify(adminAuthToken, '0') }
  catch (error) { return res.status(404).json({ message: `An error has occurred; ${error}` }) }

  try { await userModel.getItemByID(tokenDetails._id) }
  catch (error) { return res.status(404).json({ message: `Invalid authorization token provided; ${error}` }) }

  if (tokenDetails.isAdmin == false) return res.status(403).json({ message: `Unauthorized access to admin-only request` })
  
  return next()

}