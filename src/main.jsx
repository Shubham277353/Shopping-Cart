import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Routes from "./routes/Routes";

const routes = createBrowserRouter(Routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider routes={routes} />
  </StrictMode>,
);
