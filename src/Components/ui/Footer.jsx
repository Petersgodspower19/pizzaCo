import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalCartPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../helperFunctions';

function Footer() {
  const cart = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(totalCartPrice);
  const length = cart.length;
  return (
    <footer className="bg-black text-stone-200 uppercase px-4 py-4 sm:px-6 text-sm md:text-base
     flex items-center justify-between">
      <article className='flex gap-5 items-center'>
      <h5 className='text-lg'>{length} {length > 1 ? "Items" : "Item"}</h5>
      <h5 className='text-lg'>{formatCurrency(totalPrice)}</h5>
      </article>
      <h3 className='uppercase'><Link to="/cart">Open Cart</Link></h3>
    </footer>
  )
}

export default Footer
