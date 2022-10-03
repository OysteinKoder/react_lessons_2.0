import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      // HashRouter is wrapped around the app and makes the router
      // available throughout the whole app.
    }
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
