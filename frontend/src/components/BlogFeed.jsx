import React from "react";

const BlogFeed = ({ blogs }) => {
  return (
    <div>
      <h1>Blog Feed</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogFeed;
