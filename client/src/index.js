import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure Tailwind is imported here
import App from "./LinkSafetyChecker";
import LinkSafetyChecker from "./LinkSafetyChecker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LinkSafetyChecker></LinkSafetyChecker>
  </React.StrictMode>
);
