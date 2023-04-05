import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReviewOrder from './Layout/ReviewOrder'
import Home from './Layout/Home'
import Login from './Layout/Login'
import Inventory from './Layout/Inventory'
import Card from './Components/Shop/Card/Card'
import LoaderData from "../src/LoaderData"
import Loading from './Components/Loading/Loading'
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/order",
                element:<Card></Card>
            }
            ,

            {
                path:"/review",
                element: <ReviewOrder/>,
                loader: LoaderData
            },
            {
                path:"/home",
                element: <Home/>
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path:"/inventory",
                element: <Inventory/>
            },
            {
                path:"/loading",
                element: <Loading/>
            },
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
