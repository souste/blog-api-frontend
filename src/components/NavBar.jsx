import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
      <div className="container">
        <h1 className="navbar-brand text-primary fs-2">Welcome Non Member to the Blog</h1>
        <div className="ms-auto">
          <Link to="/create-post" className="btn btn-success btn-lg px-4">
            ➕ Create Post
          </Link>
        </div>
        <div className="ms-auto">
          <Link to="/sign-up" className="btn btn-outline-primary btn-lg px-4">
            📝 Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
