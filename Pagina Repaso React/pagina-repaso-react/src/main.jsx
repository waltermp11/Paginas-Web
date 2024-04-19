import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CounterProvider from "./context.jsx";
import Counter from "./Counter.jsx";
import Display from "./Display.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <Counter />
    <Display />
  </CounterProvider>
);
