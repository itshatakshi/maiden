import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashmain from "./dashmain";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Dashmain />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
