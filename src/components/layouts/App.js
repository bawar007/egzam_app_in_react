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
        <Navigation />
        <div className="page">
          <Page />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
