import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { getComments, deleteComment } from "../api";
import { Link } from "react-router-dom";
import "./styles.css";

const Comments = () => {
  const { postId, commentId } = useParams();
  const { currentUser } = useAuth();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId).then((comments) => {
      setComments(comments);
    });
  }, [postId, commentId]);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "Unknown Time";
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  const handleDelete = async (postId, commentId) => {
    const success = await deleteComment(postId, commentId);
    if (success) {
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    }
  };

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-primary">Comments</h4>
        <div className="ms-auto">
          <Link to={`/posts/${postId}/create-comment`} className="btn btn-success">
            ➕ Add Comment
          </Link>
        </div>
      </div>

      <ul className="list-group">
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="list-group-item p-3 mb-3 shadow-sm">
              <p className="text-dark">{comment.content}</p>
              <p className="text-muted">
                By <strong>{comment.username}</strong> posted on {formatTimestamp(comment.timestamp)}
              </p>
              {currentUser && (
                <div>
                  <button onClick={() => handleDelete(postId, comment.id)} className="btn-delete mt-2">
                    🗑 Delete Comment
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
