import React from "react"
import ReactDOM, { render, createRoot } from "react-dom/client";
import Body from "./src/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/About";
import Contact from "./src/Contact";
import Header from "./src/Header"
import ErrorElement from "./src/ErrorElement";


const App=()=>{
return(
<>
<Header/>
<Outlet/>
</>)
}

const appRouter= createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children:[ {
                    path:"/",
                    element:<Body/>
                },{
                path:"/about",
                element:<About/>
            },{
                path:"/contact",
                element:<Contact/>
            }],
            errorElement:<ErrorElement/>
        },
        
    ]
)



const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<RouterProvider router={appRouter}/>)