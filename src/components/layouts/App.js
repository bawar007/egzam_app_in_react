import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../../styles/App.css";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <Navigation />
        </nav>

        <div className="page">
          <Page />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
