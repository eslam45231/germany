import React,{useState} from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx"

import Notfound from "./components/Notfound/Notfound.jsx"
import Page from './components/Page/Page.jsx'
import BestPlayers from './components/BestPlayers/BestPlayers.jsx'





export default function App() {


let routers=createBrowserRouter([
  {path:"",element:<Layout />,children:[
  {path:"BestPlayers",element:<BestPlayers/>},

    {index:true,element: <Page/>},
      {path:"*",element: <Notfound/>}
  ]}
])


  return <>
  
  <RouterProvider router={routers}></RouterProvider>
  </>
}
