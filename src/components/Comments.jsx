import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../api";
import "./styles.css";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId).then((comments) => {
      console.log(comments);
      setComments(comments);
    });
  }, [postId]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="mt-4">
      <h4 className="text-center mb-4">Comments</h4>
      <ul className="list-group">
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="list-group-item p-3 mb-3 shadow-sm">
              <p className="text-dark">{comment.content}</p>
              <p className="text-muted">
                By <strong>{comment.username}</strong> posted on {formatTimestamp(comment.timestamp)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
