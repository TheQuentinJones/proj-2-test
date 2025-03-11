import express from 'express';
import type { Request, Response } from 'express';
import { Order } from '../../models/index.js';

const router = express.Router()

router.get('/', async (_req: Request, res: Response) => {
    try {
        const order = await Order.findAll()
        res.json(order)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const orderItem = await Order.findByPk(id)
        orderItem ? res.json(orderItem) : res.status(404).json({ message: 'Item not found' })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req: Request, res: Response) => {
    const { order_id, customer_id, total_amount } = req.body;
    try {
        const newOrder = await Order.create({ order_id, customer_id, total_amount });
        res.status(201).json(newOrder);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { order_id, customer_id, total_amount } = req.body;
    try {
        const order_item = await Order.findByPk(id);
        if (order_item) {
            order_item.order_id = order_id;
            order_item.customer_id = customer_id;
            order_item.total_amount = total_amount;
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
        const order_item = await Order.findByPk(id);
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

export { router as orderRouter }
