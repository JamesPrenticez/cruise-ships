import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Home from './Home'
import ShipList from './ShipList'
import Ship from './Ship'
import Glossary from './Glossary'

// Comment this for to keep things working , until I know how to make it work
// Evolution pages (Part1) Comment
// import EvolutionPart1 from './EvolutionPart1'
// import FindClassic from './FindClassic'
// Evolution pages (Part2) Comment
// import EvolutionPart2 from './EvolutionPart2'
// import FindClassicPt2 from './FindClassicPt2'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/shipsList" element={<ShipList/>} />
          <Route exact path="/ship/:id" element={<Ship/>} />
          <Route exact path="/glossary" element={<Glossary/>} />
          
          {/* Comment this for to keep things working , until I know how to make it work */}
          {/* Routes for Evolution pages and associated ships Comment
          <Route exact path='/evolution-part1' component={EvolutionPart1}/>
          <Route path = '/evolution-part1/:classic_ship_name' component={FindClassic}/>
          <Route exact path='/evolution-part2' component={EvolutionPart2}/>
          <Route path = '/evolution-part2/:classic_ship_name' component={FindClassicPt2}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}