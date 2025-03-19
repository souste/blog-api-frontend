import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
      <div className="container">
        <h1 className="navbar-brand text-primary fs-2">Welcome Non Member to the Blog</h1>
        <div className="d-flex ms-auto">
          <Link to="/create-post" className="btn btn-success btn-lg px-4 me-3">
            ➕ Create Post
          </Link>
          <Link to="/sign-up" className="btn btn-outline-primary btn-lg px-4 me-3">
            📝 Sign Up
          </Link>
          <Link to="/login" className="btn btn-outline-primary btn-lg px-4">
            📝 Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
