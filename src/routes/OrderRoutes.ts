import { Router } from "express";
import OrderController from "../controllers/OrderController";

const router = Router();

router.post('/', OrderController.create);
router.get('/', OrderController.index);
router.get('/:id', OrderController.show);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.delete);

export default router;