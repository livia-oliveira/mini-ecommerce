import { Router } from "express";
import OrderItemController from "../controllers/OrderItemController";

const router = Router();

router.post("/", OrderItemController.create);
router.get("/", OrderItemController.index);
router.delete("/:id", OrderItemController.delete);

export default router;