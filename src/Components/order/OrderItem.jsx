import React from 'react'
import { formatCurrency } from '../../helperFunctions'

function OrderItem({pizza}) {
    const { id, name, unitPrice, quantity, totalPrice } = pizza; 
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(unitPrice)}</p>
      </div>
    </li>
  )
}

export default OrderItem
