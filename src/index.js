import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import sw from "./service-worker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
sw();
