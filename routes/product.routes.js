// routes/product.routes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Base route: /api/products
router.post("/", productController.create);
router.get("/", productController.findAll);
router.get("/:id", productController.findOne);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
