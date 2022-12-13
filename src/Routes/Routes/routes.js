import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News/News";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import TermsAndCondition from "../../pages/Terms & Condition/TermsAndCondition";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-ashen.vercel.app/')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-ashen.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params})=> fetch(`https://dragon-news-server-ashen.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
])