import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layouts/Layout";
import Login from "../components/Admin/Auth/Login";
import Register from "../components/Admin/Auth/Register";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import AdminDash from "../components/Admin/Dashboard/Components/AdminDash";
import publicRoutes from "./PublicRoutes";
import privetRoutes from "./PrivetRoutes";


const router = createBrowserRouter([...publicRoutes, ...privetRoutes])


export default router