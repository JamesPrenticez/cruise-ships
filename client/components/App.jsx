import React from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom";

import Home from './Home'
import ShipList from './ShipList'
import Glossary from './Glossary'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="/shipsList" element={<ShipList />} />
          <Route exact path="/glossary" element={<Glossary />} />
        </Routes >
      </BrowserRouter>
    </>
  )
}