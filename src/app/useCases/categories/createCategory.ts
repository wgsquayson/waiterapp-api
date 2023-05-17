import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {

  try {
    const { name, icon } = req.body;

    if (!(icon && name)) {
      return res.status(400).json({error: 'Missing required fields'});
    }

    const categoryExists = await Category.findOne({name});

    if (categoryExists) {
      return res.status(400).json({error: 'Category already exists'});
    }

    const category = await Category.create({icon, name});

    return res.status(201).json(category);

  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
