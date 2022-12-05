import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Page/Cart'
import LandingPage from '../Components/Page/LandingPage'
import LandingPageAcc from '../Components/Page/LandingPageAcc'
import LandingPageWomen from '../Components/Page/LandingPageWomen'
import Login from '../Components/Page/login'
import MenProducts from '../Components/Page/MenProducts'
import OrderSuccessfull from '../Components/All_smalle_Components/OrderSuccessfull'
import PaymentForm from '../Components/All_smalle_Components/PaymentForm'
import SingleProductPage from '../Components/All_smalle_Components/SingleProductPage'
import WomenProducts from '../Components/Page/WomenProducts'
import PrivateRoute from './PrivateRoute'




const AllRoutes = () => {


  return (
    <div>

        <Routes>

            <Route path='/' element={<LandingPage />} />
            <Route path='/landingPage/women' element={<LandingPageWomen />} />
            <Route path='/landingPage/accessories' element={<LandingPageAcc />} />

            <Route path='/men-clothing' 
            element={ <PrivateRoute> <MenProducts /> </PrivateRoute> } />

            <Route path='/women-clothing' 
            element={ <PrivateRoute> <WomenProducts/></PrivateRoute> } />

            <Route path='/mobile-covers-india' 
            element={ <PrivateRoute> <h1>MEN PAGE</h1> </PrivateRoute> } />

            <Route path='/products/:id' element={

            <PrivateRoute>  <SingleProductPage /> </PrivateRoute>
            
            } />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<h1>REGISTER PAGE</h1>} />

            {/* NAVBAR IS DIFFERENT */}
            <Route path='/cart' 
            element={ <PrivateRoute> <Cart /> </PrivateRoute> } />

            <Route path='/wishlist' 
            element={ <PrivateRoute> <h1>CART PAGE</h1> </PrivateRoute> } />

            <Route path='/checkout/payment' 
            element={  <PrivateRoute>   <PaymentForm /> </PrivateRoute> } />
            <Route path='/OrderSuccessfull' 
            element={  <PrivateRoute>   <OrderSuccessfull /> </PrivateRoute> }  />

        </Routes>
      
    </div>
  )
}

export default AllRoutes
