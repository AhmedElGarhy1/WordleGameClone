import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
          <div className="blog-preview">
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            <DeleteButton id={blog.id} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
