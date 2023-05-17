import { Request, Response } from 'express';
import { Order } from '../../models/Order';
import { io } from '../../..';

export async function createOrder(req: Request, res: Response) {

  try {
    const { table, products } = req.body;

    if (!(table && products)) {
      return res.status(400).json({error: 'Missing required fields'});
    }

    const order = await Order.create({
      table,
      products
    });

    const populatedOrder = await order.populate('products.product');

    io.emit('orders@new', populatedOrder);
    res.status(201).json(populatedOrder);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
