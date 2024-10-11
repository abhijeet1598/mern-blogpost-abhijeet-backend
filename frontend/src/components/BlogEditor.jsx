import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import axios from "axios";

const BlogEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    const content = editorState.getCurrentContent().getPlainText();
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "/api/blogs",
        {
          title,
          content: [content],
          location: "US", // This should be fetched dynamically
        },
        {
          headers: { Authorization: token },
        }
      );
      alert("Blog submitted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Editor editorState={editorState} onChange={setEditorState} />
      <button onClick={handleSubmit}>Submit Blog</button>
    </div>
  );
};

export default BlogEditor;
