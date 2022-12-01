import { Request, Response } from 'express';
import { validateProductData } from '../services/validation.service';
import { addProduct, getFeaturedProductsArr, getProductById, getProductsArr, getProductsByCategoryID, getRecentProductsArr } from '../services/product.service';

export function addProductController(req: Request, res: Response) {

  let productValidity = validateProductData(req.body)

  if (productValidity.status == false) {

    res.status(400).json({ message: productValidity.message })

  } else {

    addProduct(req.body).then(

      (value) => res.status(201).json({ message: `Product added successfully with ID ${value}`, id: value }),
      (error) => res.status(400).json({ message: error, id: null })

    )

  }

}

export function getProductsController(req: Request, res: Response) {

  getProductsArr().then(

    (value) => res.status(200).json({ products: value }),
    (error) => res.status(400).json({ message: error, products: [] })

  )

}

export function getFeaturedProductsController(req: Request, res: Response) {

  getFeaturedProductsArr().then(

    (value) => res.status(200).json({ products: value }),
    (error) => res.status(400).json({ message: error, products: [] })

  )

}

export function getRecentProductsController(req: Request, res: Response) {

  getRecentProductsArr().then(

    (value) => res.status(200).json({ products: value }),
    (error) => res.status(400).json({ message: error, products: [] })

  )

}

export function getProductByIDController(req: Request, res: Response) {

  getProductById(req.params['id']).then(

    (value) => res.status(200).json({ product: value }),
    (error) => res.status(404).json({ message: error, product: null })

  )

}

export function getProductsByCategoryIDController(req: Request, res: Response) {

  getProductsByCategoryID(req.params['cat_id']).then(

    (value) => res.status(200).json({ products: value }),
    (error) => res.status(404).json({ message: error, products: [] })

  )

}