const express = require("express");
const {
  createBlog,
  getBlogsByLocation,
} = require("../controllers/blogController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createBlog);
router.get("/:location", getBlogsByLocation);

module.exports = router;
