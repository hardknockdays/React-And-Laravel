import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Baca from "./Baca";
import Sisipan from "./Sisipan";
import Dashboard from './Dashboard';
// import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/baca",
    element: <Baca />,
  },
  {
    path: "/sisipan",
    element: <Sisipan />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
