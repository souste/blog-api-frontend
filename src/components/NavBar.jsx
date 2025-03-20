import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h1 className="navbar-brand text-primary fs-2">
            Welcome to the Blog {currentUser ? currentUser.username : "(Login or Sign-up)"}
          </h1>
          <p>Sign up or Login to Create/Delete Posts & Comments. Only the Post Creators can delete their own posts</p>
        </div>
        <div className="d-flex ms-auto">
          {currentUser ? (
            <div>
              <Link to="/create-post" className="btn btn-success btn-lg px-4 me-3">
                ➕ Create Post
              </Link>
              <button onClick={handleLogout} className="btn btn-outline-danger btn-lg px-4">
                🚪 Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/sign-up" className="btn btn-outline-primary btn-lg px-4 me-3">
                📝 Sign Up
              </Link>
              <Link to="/login" className="btn btn-outline-primary btn-lg px-4">
                📝 Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
