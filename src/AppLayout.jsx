import React from 'react'
import Header from './Components/ui/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Components/ui/Footer'
import { useSelector } from 'react-redux'
import Loader from './Components/Loader'

function AppLayout() {
    const cart = useSelector(state => state.cart.cart);
    console.log(cart);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      
      <div className='flex-grow overflow-y-scroll'>
        <main className='max-w-3xl mx-auto'>
          <Outlet />
        </main>
        
      </div>

      {cart.length > 0 ? <Footer /> : null}
    </div>
  )
}

export default AppLayout
