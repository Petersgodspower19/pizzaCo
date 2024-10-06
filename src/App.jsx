import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Error from './Error'
import Home from './Home'
import Menu from './Components/menu/Menu'
import Cart from './Components/cart/Cart'
import OrderForm from './Components/order/OrderForm'
import OrderStatus from './Components/order/OrderStatus'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {path: "/", element: <Home />},
      {path: "/menu", element: <Menu />},
      {path:"/cart", element: <Cart />},
      {path: "/order/new", element: <OrderForm />},
      {path: "/order/status", element: <OrderStatus />}
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
