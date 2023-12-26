import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import Profile from "../pages/Profile";
import ErrorPage from "../commonPage/ErrorPage";
import Home from "../homePage/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChefCards from "../homePage/ChefCards";
import ChefInfo from "../homePage/ChefInfo";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage />,
        children:[
            {
              path:'/',
              element:<Home />,
            },
            {
                path:'chefCards',
                element:<ChefCards></ChefCards>,
            },
            {
                path:'chefInfo',
                element:<ChefInfo></ChefInfo>
            },
            {
                path:'blog',
                element:<Blog />
            },
            {
                path:'profile',
                element:<Profile />
            },
            {
                path:'login',
                element:<Login />
            },
            {
                path:'register',
                element:<Register />
            }
        ]
    },
])

export default router;