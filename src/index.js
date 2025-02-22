import React from 'react';
import "./index.css";
import App from "./App";
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Reactdom from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])

const root = Reactdom.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router = {router} />
)






