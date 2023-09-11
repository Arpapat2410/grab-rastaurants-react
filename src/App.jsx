import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';


function App() {

  return (
    <>
     <BrowserRouter>
        <NavBar/>
        <div className='App'>
          <Routes>
              <Route path ="/home" element={<Restaurant />} />
              <Route path ="/Add" element={<Add />}  />
              <Route path ="/Search" element={<Search />}  />
          </Routes>
        </div>
     </BrowserRouter>
    </>
  )
}

export default App
