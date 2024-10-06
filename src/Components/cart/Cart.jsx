import React from 'react'
import CartItem from './CartItem'
import Button from '../ui/Button'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../cart/cartSlice';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const userName = useSelector(state => state.user.userName);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  if(cart.length === 0) return <EmptyCart />
  return (
    
    <div className='py-3 px-4'>
      <Link to="/menu"  className='text-blue-700 hover:text-blue-400'>&larr; Back to menu</Link>

<h2 className='mt-7 text-xl font-semibold'>Your cart, {userName}</h2>
      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map(item => <CartItem pizza={item} key={item.pizzaId || item.id}/>)}
      </ul>

      <div className='mt-6 space-x-2 flex justify-between items-center'>
        <Button to="/order/new">Order Pizzas</Button>
        <button className='bg-inherit' onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart;
