import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <h1>The Bla Bla Blog</h1>
      <div className="links">
        <Link to="/">Home Page</Link>
        <Link to="/create">Creat New Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;
