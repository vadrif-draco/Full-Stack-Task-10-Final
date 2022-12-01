import { Request, Response } from 'express';
import { validateCategoryData } from '../services/validation.service';
import { addCategory, getCategoriesArr } from '../services/category.service';

export function addCategoryController(req: Request, res: Response) {

  let categoryValidity = validateCategoryData(req.body)

  if (categoryValidity.status == false) {

    res.status(400).json({ message: categoryValidity.message })

  } else {

    addCategory(req.body).then(

      (value) => res.status(201).json({ message: `Category added successfully with ID ${value}`, id: value }),
      (error) => res.status(400).json({ message: error, id: null })

    )

  }

}

export async function getCategoriesController(req: Request, res: Response) {

  getCategoriesArr().then(

    (value) => res.status(200).json({ categories: value }),
    (error) => res.status(400).json({ message: error, categories: [] })

  )

}