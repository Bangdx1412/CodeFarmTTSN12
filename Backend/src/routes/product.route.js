import { Router } from "express";
import productController from "../controllers/productController.js";
const routes = Router();

routes.get("/", productController.getProducts);
// routes.use("/products", hanldeProduct...)
// routes.use("/products", hanldeProduct...)
// routes.use("/products", hanldeProduct...)
// routes.use("/products", hanldeProduct...)

export default routes;
