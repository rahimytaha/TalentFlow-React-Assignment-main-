import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import('../public/browser').then(({ worker }) => {
  worker.start({ onUnhandledRequest: 'warn' });
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>
);
