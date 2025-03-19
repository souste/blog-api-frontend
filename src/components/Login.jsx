const Login = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h1 className="text-center text-primary mb-4">Login</h1>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
