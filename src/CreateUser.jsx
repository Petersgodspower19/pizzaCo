import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './Components/ui/Button';
import { updateName } from './userSlice';

function CreateUser() {
    const [userName, setUserName] = useState("");
    const dipatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if(!userName) return;
        dipatch(updateName(userName));
        navigate("/menu");
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center m-auto items-center'>
      <input 
  type="text" placeholder="Create An Account With Us"  value={userName} onChange={(e) => setUserName(e.target.value)} className="bg-stone-200 p-4 
  sm:w-[60%] w-[50%] border-2 border-transparent focus:border-stone-400 outline-none" />
  <Button>Order Now!</Button>
    </form>
  )
}

export default CreateUser
