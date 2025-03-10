import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { orderItemRouter } from './orderItemRouter.js'
import { orderRouter } from './orderRouter.js'
import { productRouter } from './productRouter.js'
import { customerRouter } from './customerRouter.js';

const router = Router();

router.use('/users', userRouter);
router.use('/orderItem', orderItemRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/customer', customerRouter);

export default router;