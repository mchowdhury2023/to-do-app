import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import AddTask from "./pages/AddTask/AddTask";
import AllUsersPage from "./pages/AllUsersPage/AllUsersPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RegisterUser from "./pages/RegisterUser/RegisterUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/allusers",
        element: <AllUsersPage></AllUsersPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <RegisterUser></RegisterUser>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
