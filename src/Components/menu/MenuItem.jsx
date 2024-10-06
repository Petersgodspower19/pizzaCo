import React from 'react'
import Button from '../ui/Button'
import MenuButton from './MenuButton'
import { formatCurrency } from '../../helperFunctions';

function MenuItem({pizza}) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex gap-4 py-2 px-4 ">
      <img src={imageUrl} alt="" className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""} width-[100px]`}/>
      <div className="flex flex-col grow pt-0.5 w-[60%]">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
    </div>
    <div className='flex items-center'>
    {!soldOut && <MenuButton item={pizza}>Add To Cart</MenuButton>}
    </div>
    </li>
  )
}

export default MenuItem
