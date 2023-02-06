import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Page from "../Page/Page";
import Footer from "../Footer/Footer";
import AppProvider from "../../pages/PassPage/Provider/provider";

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
