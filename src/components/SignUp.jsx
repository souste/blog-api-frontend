const SignUp = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h1 className="text-center text-primary mb-4">Sign Up</h1>
        <form action="/sign-up" method="POST" className="needs-validation">
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name:
            </label>
            <input type="text" id="first_name" name="first_name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name:
            </label>
            <input type="text" id="last_name" name="last_name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input type="text" id="username" name="username" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" id="email" name="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input type="password" id="password" name="password" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label">
              Confirm Password:
            </label>
            <input type="password" id="confirm_password" name="confirm_password" className="form-control" required />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="/" className="btn btn-custom">
            <button>⬅</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
