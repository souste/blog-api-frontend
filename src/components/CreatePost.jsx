const CreatePost = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Create a New Post</h1>
      <p> (This will only work with the admin version of this site)</p>
      <form action="/create-post" method="POST" className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input type="text" name="title" id="title" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <textarea name="content" id="content" className="form-control" required />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            ➕ Create Post
          </button>
        </div>
      </form>
      <div className="text-center mt-3">
        <a href="/" className="btn btn-custom">
          <button>⬅</button>
        </a>
      </div>
    </div>
  );
};

export default CreatePost;
