import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/authContext";
// import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider >
      <App />
    </AuthContextProvider>

  </BrowserRouter>
);
