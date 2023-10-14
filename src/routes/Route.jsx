import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import Profile from "../pages/Profile";
import ErrorPage from "../commonPage/ErrorPage";
import Home from "../homePage/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage />,
        children:[
            {
              path:'/',
              element:<Home />
            },
            {
                path:'blog',
                element:<Blog />
            },
            {
                path:'profile',
                element:<Profile />
            }
        ]
    },
])

export default router;