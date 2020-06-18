import { getAllProducts } from "db";

import { Router } from "express";

const router = Router();

// @route GET api/products/test
// @description tests products route
// @access Public
router.get("/test", (_, res) => {
  res.send("<p>Products router testing</p>");
});

// @route GET api/products/products
// @description gets all products
// @access Public
router.get("/products", async (_, res) => {
  res.json(await getAllProducts());
});

export default router;
