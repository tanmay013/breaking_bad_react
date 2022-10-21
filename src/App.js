import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import CardDescription from "./Components/CardDescription";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cardDescript/:id" element={<CardDescription />} />
      </Routes>

    </div>
  );
}

export default App;
