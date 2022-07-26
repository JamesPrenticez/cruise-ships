import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Cruise Lines page
import CruiseLines from './Cruiselines'
// Cruise Review page (may need to have this separate for Reviews Page in Reviews Branch)
// import Reviews from './Reviews'

function App()  {
  return  (
    <>
    <BrowserRouter>
      <Routes>
        {/* Put Routes here for Cruise Lines Page */}
        <Route exact path='/cruiselines' element={CruiseLines} />

        {/* Comment Reviews element, because that should be donein my Reviews Branch
        <Route path='/cruiselines/:cruiselines' element={Reviews}/> */}

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App