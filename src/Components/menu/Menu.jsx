import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { getMenu } from '../../helperFunctions';
import Loader from '../Loader';

function Menu() {
  const [menu, setMenu] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    setIsLoading(true);

    
    getMenu()
      .then((menuData) => {
        setMenu(menuData); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching menu:', error);
        setIsLoading(false); 
      });
  }, []);

 
  if (isLoading) return <Loader />;
  if (!menu || menu.length === 0) return <p>No menu available.</p>;

  return (
    <div className='mt-12'>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
