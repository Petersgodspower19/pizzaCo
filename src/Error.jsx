import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import Button from './Components/ui/Button';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className='m-2 p-2'>
      <h1>Something went wrong 😢</h1>
      <p className='mb-2'>{error?.data || error?.message}</p>

     
      <Button onClick={handleGoBack}> &larr; Go back</Button>
    </div>
  );
}

export default Error;
