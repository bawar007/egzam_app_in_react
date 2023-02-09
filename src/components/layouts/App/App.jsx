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
          <nav className="navi">
            <Navigation />
          </nav>
          <main className="page">
            <Page />
          </main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
