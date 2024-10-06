import React from 'react'
import Button from '../ui/Button'

function EmptyCart() {
  return (
    <div>
      <div className='px-4 py-3'>
      <Button to="/menu" >&larr; Back to menu</Button>

      <p className='font-semibold mt-7'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
    </div>
  )
}

export default EmptyCart
