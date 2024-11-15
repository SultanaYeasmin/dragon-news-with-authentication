import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>,
            },
            {
                path: "/category/:id",
                // element: <h2>this is category</h2>,
                 element: <CategoryNews/>,
              loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            
            }
        ]
    },
    {
        path: "/news",
        element: <h1>news layout</h1>,
    },
    {
        path: "auth",
        element: <AuthLayout/>,
        children: [
              {
                path:"/auth/login",
                element: <h2> login </h2>
              },
              {
                path:"/auth/register",
                element: <h2> register </h2>
              }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
]);

export default router;