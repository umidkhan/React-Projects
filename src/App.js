import React from "react";
import "./App.js";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Section from "./components/Section/Section";
import Header from "./components/Header/Header";



function App() {
  return (
    <div>
      <Router>

        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/section" element={<Section />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
