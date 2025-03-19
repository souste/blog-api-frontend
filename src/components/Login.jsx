import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api";
import { useAuth } from "../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await loginUser(loginData);

      if (response.errors) {
        setErrors(response.errors);
        setIsSubmitting(false);
        return;
      }

      setCurrentUser(response.data.user);
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

        {errors.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
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
              value={loginData.password}
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
