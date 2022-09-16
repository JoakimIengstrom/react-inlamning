import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Guestbook from "./components/Guestbook";

function App() {  

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Guestbook">Lore</Link>
        </nav>
        <div className="Main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Guestbook" element={<Guestbook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;