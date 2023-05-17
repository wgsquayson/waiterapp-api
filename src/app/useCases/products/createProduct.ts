import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {

  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const parsedIngredients = ingredients ?  JSON.parse(ingredients) : [];

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: parsedIngredients,
      imagePath
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
