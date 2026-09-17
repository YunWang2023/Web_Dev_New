const Blog = require("../models/blogModel");

// GET /blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

// POST /blogs
const createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const blog = await Blog.create({
      title,
      content,
      author,
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET /blogs/:id
const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE /blogs/:id
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
};