import ForgotPassword from "../components/Admin/Auth/ForgotPassword"
import Login from "../components/Admin/Auth/Login"
import Register from "../components/Admin/Auth/Register"
import AdminDash from "../components/Admin/Dashboard/Components/AdminDash"
import Dashboard from "../components/Admin/Dashboard/Dashboard"
import Users from "../pages/users/Users"


const publicRoutes = [
    
    {
        path : '/',
        element : <Dashboard></Dashboard>,
        children : [
            {
                path : '/',
                element : <AdminDash></AdminDash>
            },
            {
                path : '/users',
                element : <Users></Users>
            }
        ]
    },
    {
        path : '/register',
        element : <Register></Register>,
      
    }
    ,
    {
        path : '/login',
        element : <Login></Login>,
      
    }
    ,
    {
        path : '/forgot-password',
        element : <ForgotPassword></ForgotPassword>,
      
    }

]


export default publicRoutes