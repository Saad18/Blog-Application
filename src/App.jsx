import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
