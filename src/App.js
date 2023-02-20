import React, { useEffect, useState } from "react";
import "./App.css";
import Posts from "./pages/Posts";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
