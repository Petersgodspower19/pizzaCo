import React from 'react';
import Button from '../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from './cartSlice';
import { formatCurrency } from '../../helperFunctions';


function CartItem({ pizza }) {
  const { id, name, unitPrice, quantity, totalPrice } = pizza; 
  const dispatch = useDispatch();

  return (
    <li className="py-3  sm:items-center sm:justify-between sm:flex-row flex flex-col gap-2">
      <p className="mb-1 sm:mb-0 w-[60%]">
        {name} - Quantity: {quantity || 1} 
      </p>
      <div className='flex items-center gap-3'>
      <div className='flex gap-2 items-center md:gap-4'>
        <Button onClick={() => dispatch(decreaseItemQuantity(id))}>-</Button>
        <span className='text-sm font-medium'>{quantity}</span>
        <Button onClick={() => dispatch(increaseItemQuantity(id))}>+</Button>
      </div>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice) || formatCurrency(unitPrice)}</p>
      </div>
      </div>
      <Button onClick={() => dispatch(removeItem(id))}>Delete</Button>
    </li>
  );
}

export default CartItem;
