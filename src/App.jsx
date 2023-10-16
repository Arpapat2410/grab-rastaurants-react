import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';
import  Update  from './pages/Update';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import ProtectedRoute from './pages/ProtectedRoute';
import Profile from './pages/Proflie';
import Layout from './component/Layout'
import NotAllow from './pages/NotAllow';
import AdminRoute from './pages/AdminRoute'

function App() {
  return (

     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Restaurant />} />
              <Route path ="Add" element={<ProtectedRoute><Add /> </ProtectedRoute>}/>
              <Route path ="Search" element={<ProtectedRoute><Search /> </ProtectedRoute>}  />

              <Route path ="update/:restaurantId" element={<Update />}  />
              <Route path ="NotAllow" element={<NotAllow />}  />
              <Route path ="SignIn" element={<SignIn />}  />
              <Route path ="SignUp" element={<SignUp />}  />
              <Route path ="Profile" element={<Profile />}  />
              <Route path='Logout' element={<Logout />}></Route>

            </Route>
          </Routes>
     </BrowserRouter>
   
  )
}

export default App
