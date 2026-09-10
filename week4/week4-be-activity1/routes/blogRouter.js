const express = require("express");

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

// GET all blogs
router.get("/", getAllBlogs);

// POST a new blog
router.post("/", createBlog);

// GET a single blog
router.get("/:id", getBlogById);

// DELETE a blog
router.delete("/:id", deleteBlog);

module.exports = router;