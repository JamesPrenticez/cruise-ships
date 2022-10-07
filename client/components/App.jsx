import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Home from './Home'
import ShipList from './ShipList'
import Ship from './Ship'
import ShipTerms from './ShipTerms'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/shipsList" element={<ShipList/>} />
          <Route exact path="/ship/:id" element={<Ship/>} />
          <Route exact path="/shipterms" element={<ShipTerms/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App