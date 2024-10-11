const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  const { title, content, location } = req.body;
  try {
    const blog = new Blog({
      title,
      content,
      location,
      createdBy: req.user.userId,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBlogsByLocation = async (req, res) => {
  const { location } = req.params;
  try {
    const blogs = await Blog.find({ location });
    res.json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
