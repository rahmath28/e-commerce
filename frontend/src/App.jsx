import React from 'react'
import Header from './components/Header'
import { AllRoutes } from './routes/AllRoutes'

// Na set panna , allroutes path ah inga call panniten.., router main.jsx laye pass panni yachu app , athu app ah render pannuthu..

const App = () => {
  return (
   <>
    <Header/>
    <div className="container">
    <AllRoutes/>
    </div>
    
   </>
  )
}

export default App