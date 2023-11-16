import React from 'react'
import Main from '../Components/Layout/Main';
import {createBrowserRouter} from 'react-router-dom';
import FirstPage from "../Components/Layout/FirstPage";
import Getme from '../GetContact/Getme';

const Router = createBrowserRouter([
    {
        Path:'/',
        element:<Main/>,
        children:[

            {
                path:"",
                element:<FirstPage/>
            },
            {
                path:"/Getme",
                element:<Getme/>
            },
            {
                path:"",
                element:""
            },
            {
                path:"/",
                element:"/"
            },
            {
                path:"/",
                element:"/"
            },
        ]

    }
])

export default Router;