import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";

function App() {
  return (
    // <Router basename="/egzam_app_in_react/">
    <Router>
      <div className="App">
        <div className="navi">
          <Navigation />
        </div>

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
