import { useState, useEffect } from "react";
import { getPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      console.log("posts component", posts);
      setPosts(posts);
    });
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  return (
    <div>
      <h2>Welcome to the Posts Page</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>
                By {post.username} posted on {formatTimestamp(post.timestamp)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
