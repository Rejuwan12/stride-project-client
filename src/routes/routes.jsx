import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from './../pages/Contact';
import About from './../pages/About';
import Register from './../pages/Register';
import Login from './../pages/Login';
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/dashboard/Overview";
import SellerRoute from "./private/SellerRoute";
import MyProducts from "../pages/dashboard/MyProducts";
import AddProducts from './../pages/dashboard/AddProducts';


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/products',
                element:<Products/>
            },
            {
                path:'/contact-us',
                element:<Contact/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
        ]
    },
    {
        path:'/dashboard',
        element:(
            <PrivateRoute>
            <DashboardLayout/>
        </PrivateRoute>
        ),
        children:[
            {
            path:'/dashboard/overview',
            element:<Overview/>
            },
            // seller routes
            {
            path:'/dashboard/my-products',
            element: <SellerRoute><MyProducts/></SellerRoute>
            },
            {
            path:'/dashboard/add-products',
            element: <SellerRoute><AddProducts/></SellerRoute>
            },

    ]
    }
]);