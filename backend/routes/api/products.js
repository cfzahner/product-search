import { getAllProducts } from "db";

const express = require("express");

const router = express.Router();

// @route GET api/products/test
// @description tests products route
// @access Public
router.get("/test", (_, res) => res.send("products route testing!"));

// @route GET api/products/products
// @description gets all products
// @access Public
router.get("/products", async (_, res) => res.json(await getAllProducts()));

export default router;
