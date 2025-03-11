import express from 'express';
import type { Request, Response } from 'express';
import { Customer } from '../../models/index.js';

const router = express.Router();

// GET /customers - Get all customers
router.get('/', async (_req: Request, res: Response) => {
  try {
    const customers = await Customer.findAll({
      attributes: { exclude: ['password'] }
    });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

// GET /customers/:id - Get a customer by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findByPk(id, {
      attributes: { exclude: ['password'] }
    });
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /customers - Create a new customer
router.post('/', async (req: Request, res: Response) => {
  const { customer_id, customer_name, customer_email, customer_password } = req.body;
  try {
    const existingCustomer = await Customer.findOne({ where: { customer_email } });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const newCustomer = await Customer.create({ customer_id, customer_name, customer_email, customer_password });
    return res.status(201).json(newCustomer);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

// PUT /customers/:id - Update a customer by id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { customer_email, customer_password } = req.body;
  try {
    const customer = await Customer.findByPk(id);
    if (customer) {
      customer.customer_email = customer_email;
      customer.customer_password = customer_password;
      await customer.save();
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /customers/:id - Delete a customer by id
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findByPk(id);
    if (customer) {
      await customer.destroy();
      res.json({ message: 'Customer deleted' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as customerRouter };
