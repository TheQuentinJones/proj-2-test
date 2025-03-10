import express from 'express';
import type { Request, Response } from 'express';
import { Products } from '../../models/index.js';

const router = express.Router()

router.get('/', async (_req: Request, res: Response) => {
    try {
        const product = await Products.findAll()
        res.json(product)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const productItem = await Products.findByPk(id)
        productItem ? res.json(productItem) : res.status(404).json({ message: 'Item not found' })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req: Request, res: Response) => {
    const { product_name, product_description, product_price, product_image_file, product_stock } = req.body;
    try {
        const newProduct = await Products.create({ product_name, product_description, product_price, product_image_file, product_stock });
        res.status(201).json(newProduct);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { product_id, product_name, product_description, product_price, product_image_file, product_stock } = req.body;
    try {
        const product_item = await Products.findByPk(id);
        if (product_item) {
            product_item.product_id = product_id;
            product_item.product_name = product_name;
            product_item.product_description = product_description;
            product_item.product_price = product_price;
            product_item.product_image_file = product_image_file;
            product_item.product_stock = product_stock;
            await product_item.save();
            res.json(product_item);
        } else {
            res.status(404).json({ message: 'Product Item not found' });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { product_id } = req.params;
    try {
        const product_item = await Products.findByPk(product_id);
        if (product_item) {
            await product_item.destroy();
            res.json({ message: 'Product Item deleted' });
        } else {
            res.status(404).json({ message: 'Product Item not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export { router as productRouter }
