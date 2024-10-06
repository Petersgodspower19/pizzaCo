import React from 'react'
import { Link } from 'react-router-dom'

function Button({children, to, onClick}) {
    if (to) return <Link to={to} className='bg-yellow-500  rounded-full border-0 text-white font-semibold px-2 py-[3px]'>{children}</Link>
  
    return (
    <button className='bg-yellow-500  rounded-full border-0 text-white font-semibold px-2 py-[3px]' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
