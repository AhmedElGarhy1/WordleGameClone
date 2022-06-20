import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Ahmed");
  const [isPingding, setIsPinding] = useState(false);
  const navigate = useNavigate();
  function handleSubmite(e) {
    setIsPinding(true);
    e.preventDefault();
    const newBlog = { title, body, author };
    console.log(newBlog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setTimeout(() => {
        setIsPinding(false);
      }, 1000);
      navigate("/");
    });
    setTitle("");
    setBody("");
    setAuthor("");
  }
  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmite}>
        <label>Blog Title: </label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Ahmed">Ahmed </option>
          <option value="Mom">Mom </option>
        </select>
        {!isPingding && <button className="btn">Add Blog</button>}
        {isPingding && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
