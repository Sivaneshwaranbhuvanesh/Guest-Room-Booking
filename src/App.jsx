import React from 'react';
import Signup from './signup/signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './login/login'
import HouseOwner from './houseowner/HouseOwner'
import Customer from './customer/Customer'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/'element={<Signup />}> </Route>
          <Route  path='/login' element={<Login />}> </Route>
          <Route  path='/houseowner' element={<HouseOwner />}> </Route>
          <Route  path='/CustomerLogin' element={<Customer />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
