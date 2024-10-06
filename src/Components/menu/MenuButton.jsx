import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice';

function MenuButton({children, item}) {
  const dispatch = useDispatch();
  return (
    <button className="bg-yellow-500 uppercase  px-2 py-[3px] rounded-sm text-white font-semibold  " 
    onClick={() => dispatch(addToCart(item))}>
      {children}
    </button>
  )
}

export default MenuButton
