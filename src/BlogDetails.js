import { useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Lodding.....</div>}
      {data && (
        <div className="blog-details">
          <h2>{data.title}</h2>
          <p>
            Written By <span>{data.autour}</span>
          </p>
          <div>{data.body}</div>
          <DeleteButton id={id} />
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
