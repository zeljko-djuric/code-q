import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<PostPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
