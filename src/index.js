import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AOSInitializer from "./helpers/AosInitializer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AOSInitializer>
      <App />
    </AOSInitializer>
  </React.StrictMode>
);
