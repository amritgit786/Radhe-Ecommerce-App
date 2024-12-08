import express from "express";

import {
  addProduct,
  listProducts,
  removeProduct,
  singleProductInfo,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/addproduct",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.get("/listproduct", listProducts);
productRouter.delete("/removeproduct/:id", adminAuth, removeProduct);
productRouter.get("/singleproduct/:id", singleProductInfo);

export default productRouter;