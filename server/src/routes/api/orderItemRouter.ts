import express from 'express';
import type { Request, Response } from 'express';
import { OrderItem } from '../../models/index.js';

const router = express.Router()

router.get('/', async (_req: Request, res: Response) => {
    try {
        const orderItems = await OrderItem.findAll()
        res.json(orderItems)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const orderItem = await OrderItem.findByPk(id)
        orderItem ? res.json(orderItem) : res.status(404).json({ message: 'Item not found' })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req: Request, res: Response) => {
    const { order_id, product_id, quantity } = req.body;
    console.log(req.body);
    try {
        const newOrderItem = await OrderItem.create({ order_id, product_id, quantity });
        console.log(newOrderItem);
        res.status(201).json(newOrderItem);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { order_item_id, order_id, product_id, quantity } = req.body;
    try {
        const order_item = await OrderItem.findByPk(id);
        if (order_item) {
            order_item.order_item_id = order_item_id;
            order_item.order_id = order_id;
            order_item.product_id = product_id;
            order_item.quantity = quantity;
            await order_item.save();
            res.json(order_item);
        } else {
            res.status(404).json({ message: 'Order Item not found' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const order_item = await OrderItem.findByPk(id);
        if (order_item) {
            await order_item.destroy();
            res.json({ message: 'Order Item deleted' });
        } else {
            res.status(404).json({ message: 'Order Item not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export { router as orderItemRouter }
