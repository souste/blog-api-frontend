import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/CreatePost";
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
      </Routes>
    </div>
  );
}

export default App;
