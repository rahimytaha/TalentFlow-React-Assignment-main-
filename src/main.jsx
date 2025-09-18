import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ListCandidates from "./components/Candidates/ListCandidates";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <ListCandidates/> */}
  </BrowserRouter>
);
