import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const userName = useSelector(state => state.user.userName);
    
    return (
      <header className='flex justify-between items-center px-5 py-3.5 sm:px-4 sm:py-3 bg-yellow-500 text-black'>
        <h2><Link to="/" className='text-black text-xl'>Pizza Co.</Link></h2>
        <h4 className='text-lg'>{userName}</h4>
      </header>
    );
}

export default Header;
