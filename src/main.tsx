import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app.tsx";
import "modern-normalize/modern-normalize.css";
import "./base.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
