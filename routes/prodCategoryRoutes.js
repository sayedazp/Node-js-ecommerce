const express = require("express");
const {
  createProdCategory,
  updateProdCategory,
  deleteProdCategory,
  getProdCategory,
  getallProdCategory
} = require("../controller/prodCategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProdCategory);
router.put("/:id", authMiddleware, isAdmin, updateProdCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteProdCategory);
router.get("/:id", getProdCategory);
router.get("/", getallProdCategory);

module.exports = router;