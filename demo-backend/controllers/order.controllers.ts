import { Request, Response } from 'express';
import { validateOrderData } from '../services/validation.service';
import { addOrder, getOrdersArr } from '../services/order.service';

export function addOrderController(req: Request, res: Response) {

  let orderValidity = validateOrderData(req.body)

  if (orderValidity.status == false) {

    res.status(400).json({ message: orderValidity.message })

  } else {

    addOrder(req.body).then(

      (value) => res.status(201).json({ message: `Order added successfully with ID ${value}`, data: value }),
      (error) => res.status(400).json({ message: error, data: null })

    )

  }

}

export async function getOrdersController(req: Request, res: Response) {

  getOrdersArr().then(

    (value) => res.status(200).json({ data: value }),
    (error) => res.status(400).json({ message: error, data: [] })

  )

}