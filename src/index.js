import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/App.css";
import "./styles/Navigation.css";
import "./styles/PassPage.css";
import "./styles/PassNavi.css";
import "./styles/PassInProgress.css";
import "./styles/PassResult.css";

import App from "./components/layouts/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
