import "./styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {posts.map((post) => {
          return (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li key={post.id} className="list-group-item mb-3 p-3 shadow-sm">
                <h3 className="text-primary">{post.title}</h3>
                <p className="text-muted">{post.content}</p>
                <p className="text-secondary">
                  <strong>By {post.username}</strong> posted on {formatTimestamp(post.timestamp)}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
