import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NavigationProvider } from "./context/NavigationContext.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
