import React from 'react';
import { useSelector } from 'react-redux';
import CreateUser from './CreateUser';
import Button from './Components/ui/Button';

function Home() {
    const userName = useSelector(state => state.user.userName);
    
    return (
      <div className="my-10 sm:my-16 text-center">
        <h1 className='text-xl'>Welcome to <span className='text-yellow-500'>Pizza Co</span></h1>
        <h2 className="text-lg font-semibold mb-8 md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500 p-2">Straight out of the oven, straight to you.</span>
        </h2>
        {userName === "" ? <CreateUser /> : <Button to="/menu" >Continue Ordering {userName}</Button>}
      </div>
    );
}

export default Home;
