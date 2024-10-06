import React from 'react'
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../helperFunctions';
import { totalCartPrice } from '../cart/cartSlice';

function OrderStatus() {
    const cart = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(totalCartPrice);

    const estimatedDelivery = new Date().getTime() + 45 * 60000; // Example: 45 minutes from now
  const deliveryIn = calcMinutesLeft(estimatedDelivery);  // Calculate minutes left
  return (
    <div className='mt-5 px-4 py-3 relative'>
      <p className='text-right mb-6 bg-green-500 text-white green'>Preparing Order</p>
      <br />
      <div className="bg-stone-200 px-6 py-5 flex items-center justify-between flex-wrap gap-2 mt-5">
        <p className="font-medium text-xs text-stone-500">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className='mt-5'>
      <ul className="divide divide-y-stone-200 border-b border-t">
        {cart.map(item => <OrderItem  pizza={item} key={item.id} />)}
      </ul>
      </div>
      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-xs font-medium text-stone-600">Price pizza: {formatCurrency(totalPrice)}</p>
         <p className="text-xs font-medium text-stone-600">Price priority: {formatCurrency(totalPrice)}</p>
        <p className="font-bold">To pay on delivery: {formatCurrency(totalPrice)}</p>
      </div>
    </div>
  )
}

export default OrderStatus
