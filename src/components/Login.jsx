import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await loginUser(user);
      console.log("Errors received:", response.errors);

      if (response.errors) {
        setErrors(response.errors);
        setIsSubmitting(false);
        return;
      }

      navigate("/");
    } catch (err) {
      console.error("Failed to login user", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h1 className="text-center text-primary mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-auto" disabled={isSubmitting}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
