import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/Mana.scss";
import Mana from "./components/Mana.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("billboard"));
root.render(
  <React.StrictMode>
    <Mana />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
