const CreatePost = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Create a New Post</h1>
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
          <input type="textarea" name="content" id="content" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="user_id" className="form-label">
            User ID (temp until login sorted):
          </label>
          <input type="number" name="user_id" id="user_id" className="form-control" min="1" max="15" required />
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
