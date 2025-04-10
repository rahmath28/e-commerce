import React from 'react'
import Header from './components/Header'
// import { AllRoutes } from './routes/AllRoutes'
import {Outlet} from"react-router-dom"

// Na set panna , allroutes path ah inga call panniten.., router main.jsx laye pass panni yachu app , athu app ah render pannuthu..

const App = () => {
  return (
   <>
    <Header/>
    <div className="container">
    {/* <AllRoutes/> */}
    {/*  intha allroutes method older way ... */}

    <Outlet/>
    {/* intha outlet new way .. */}
    {/* router set panna aprm, intha allroutes mari , intha "Outlet" ah call pannita , based on path , routes run agum..*/}
    </div>
    
   </>
  )
}

export default App