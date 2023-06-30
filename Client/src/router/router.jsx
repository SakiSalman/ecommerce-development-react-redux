import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layouts/Layout";
import App from "../App";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);

  export default router