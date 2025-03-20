import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { createPost } from "../api";

// This needs to be a protected route, only available to loggedin users
// the button is hidden but the url would still be available to users

const CreatePost = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log("current user from Post", currentUser);
  const [post, setPost] = useState({
    title: "",
    content: "",
    user_id: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
      user_id: currentUser?.id,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(false);

    try {
      const postData = {
        ...post,
        user_id: currentUser?.id,
      };
      await createPost(postData);

      navigate("/");
    } catch (err) {
      console.error("Failed to create post", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h1 className="text-center text-primary mb-4">Create a New Post</h1>

        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={post.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content:
            </label>
            <textarea
              name="content"
              id="content"
              value={post.content}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success" disabled={isSubmitting}>
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
    </div>
  );
};

export default CreatePost;
