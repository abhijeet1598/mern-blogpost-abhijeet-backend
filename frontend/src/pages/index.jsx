import { useState, useEffect } from "react";
import axios from "axios";

const BlogFeed = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `https://ipinfo.io/json?token=YOUR_IPINFO_TOKEN`
        );
        const location = res.data.country;
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
