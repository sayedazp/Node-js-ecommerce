const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require("../controller/blogController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");

router.post("/", authMiddleware, isAdmin, createBlog);
router.put('/upload/:id', authMiddleware, isAdmin, uploadPhoto.array('images', 10), blogImgResize,  uploadImages)
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);

module.exports = router;