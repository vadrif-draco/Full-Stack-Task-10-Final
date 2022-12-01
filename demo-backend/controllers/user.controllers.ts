import { loginUser, registerUser } from "../services/auth.service";
import { validateLoginInfo } from "../services/validation.service";
import { Request, Response } from "express";

export function loginController(req: Request, res: Response) {

  let loginValidity = validateLoginInfo(req.body)

  if (loginValidity.status == false) {

    res.status(400).json({ message: loginValidity.message })

  } else {

    loginUser(req.body).then(

      (value) => res.status(201).json({ message: "User has logged in successfully", token: value }),
      (error) => res.status(404).json({ message: error, token: null })

    )

  }

}

export function registerController(req: Request, res: Response) {

  let registrationValidity = validateLoginInfo(req.body)

  if (registrationValidity.status == false) {

    res.status(400).json({ message: registrationValidity.message })

  } else {

    registerUser(req.body).then(

      (value) => res.status(201).json({ message: "User has been registered successfully", id: value }),
      (error) => res.status(404).json({ message: error, id: null })

    )

  }

}