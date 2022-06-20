import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry </h1>
      <p>The Page Not Found</p>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
};

export default NotFound;
