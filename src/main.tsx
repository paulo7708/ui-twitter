import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
