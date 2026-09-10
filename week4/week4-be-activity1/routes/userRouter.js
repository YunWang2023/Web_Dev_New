const express = require("express");

const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// POST a new user
router.post("/", createUser);

// GET a single user
router.get("/:id", getUserById);

// DELETE a user
router.delete("/:id", deleteUser);

module.exports = router;