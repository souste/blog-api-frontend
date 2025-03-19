import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/CreatePost";
import CreateComment from "./components/CreateComment";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts/:postId/create-comment" element={<CreateComment />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
