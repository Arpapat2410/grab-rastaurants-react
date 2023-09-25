import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';
import  Update  from './pages/Update';


function App() {

  return (
    <>
    
     <BrowserRouter>
        <NavBar/>
        <div className='App'>
          <Routes>
              <Route path ="/" element={<Restaurant />} />
              <Route path ="/Add" element={<Add />}  />
              <Route path ="/Search" element={<Search />}  />
              <Route path ="/update/:restaurantId" element={<Update />}  />
          </Routes>
        </div>
     </BrowserRouter>
    </>
  )
}

export default App
