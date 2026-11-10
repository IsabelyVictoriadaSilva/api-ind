
import { Router } from "express";
import productRoutes from "./product.routes.js";
import customerRoutes from "./customer.routes.js";
import orderRoutes from "./order.routes.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/orders", orderRoutes);

export default router;
