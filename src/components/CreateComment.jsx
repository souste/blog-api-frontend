import "./styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createComment } from "../api";

//The user ID should be 14 if no a logged in user
const CreateComment = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState({
    content: "",
    user_id: 14,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await createComment(postId, comment);
      navigate(`/posts/${postId}`);
    } catch (err) {
      console.error("Failed to create comment", err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Create a new comment</h1>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Comment:
          </label>
          <textarea
            name="content"
            id="content"
            className="form-control"
            value={comment.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Comment"}
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

export default CreateComment;
