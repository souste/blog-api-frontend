import "./styles.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSinglePost } from "../api";
import Comments from "./Comments.jsx";

const SinglePost = () => {
  const { postId } = useParams();
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    getSinglePost(postId).then((post) => {
      setSinglePost(post);
    });
  }, [postId]);

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "Unknown Time";
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  //   Ternary for update date if user has updated post?

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4 bg-light">
        <h3 className="text-primary text-center">{singlePost.title}</h3>
        <p className="text-dark">{singlePost.content}</p>
        <p className="text-muted">
          Submitted By <strong>{singlePost.username}</strong> on {formatTimestamp(singlePost.updated_at)}
        </p>
        <Comments />
        <div className="text-center mt-3">
          <a href="/" className="btn btn-custom">
            <button>⬅</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
