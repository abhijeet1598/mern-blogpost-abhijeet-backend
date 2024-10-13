import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogFeed = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const res = await axios.get(
        //   `https://ipinfo.io/json?token=${config.ipInfoToken}`
        // );
        // const location = res.data.country;
        const blogRes = await axios.get(`/api/blogs/${location}`);
        setBlogs(blogRes.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog Feed</h1>
      <button>
        <Link to="/create">Create blog</Link>
      </button>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content.join(" ")}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogFeed;
