const express = require("express")
const router = express.Router()
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages
} = require("../controller/productController")
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImages");

router.post("/create", authMiddleware, isAdmin, createProduct);

router.put('/upload/:id', authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImgResize,  uploadImages)

router.get("/:id", getaProduct);
router.get("/", getAllProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;