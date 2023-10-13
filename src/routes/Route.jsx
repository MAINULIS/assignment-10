import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
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