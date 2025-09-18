import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Test from "./components/Candidates/test";
import('../public/browser').then(({ worker }) => {
  worker.start();
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <App /> */}
    <Test />
  </BrowserRouter>
);
