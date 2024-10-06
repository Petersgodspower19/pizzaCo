import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency, getAddress } from '../../helperFunctions';
import { clearCart, totalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { updateLocation, updateNumber } from '../../userSlice';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
  const { userName, userLocation, phoneNumber } = useSelector(state => state.user);
  const cart = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(totalCartPrice);
  const [location, setLocation] = useState(userLocation || "");  
  const [number, setNumber] = useState(phoneNumber || ""); 
  const [loadingLocation, setLoadingLocation] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetPosition = async (e) => {
    e.preventDefault();

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoadingLocation(true); 

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const addressData = await getAddress({ latitude, longitude });
        const address = `${addressData.locality}, ${addressData.countryName}`; 

        setLocation(address); 
        dispatch(updateLocation(address));  // Dispatch address to store
      } catch (error) {
        console.error("Error fetching address:", error);
        alert("Failed to fetch your address.");
      }

      setLoadingLocation(false); 
    }, (error) => {
      console.error("Error getting location:", error);
      alert("Failed to get your location. Ensure you have internet Connection");
      setLoadingLocation(false); 
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateNumber(number)); 
    navigate("/order/status");
    // dispatch(clearCart()); 
  }

  if(cart.length === 0) return <EmptyCart />;  

  return (
    <div className='mt-4'>
      <h1 className='font-semibold text-xl p-2'>Ready To Order?</h1>
      <form className='flex flex-col gap-2 mt-4 px-4 py-3' onSubmit={handleSubmit}>
        <div className=''>
          <label className="sm:basis-40">First Name</label>
          <input type="text" defaultValue={userName} className='input w-full' />
        </div>

        <div className=''>
          <label className="sm:basis-40">Phone Number</label>
          <input
            type="tel"
            name="number"
            id=""
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            className='input w-full'
          />
        </div>

        <div className=''>
          <label className="sm:basis-40">Address</label>
          <input
            type="text"
            placeholder='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='input w-full'
            required
          />
          <button
            onClick={handleGetPosition}
            disabled={loadingLocation}
            className='bg-yellow-400 text-black border-0 rounded-md px-4 py-1 mt-2'
          >
            {loadingLocation ? 'Getting Location...' : 'Get Location'}
          </button>
        </div>

        <br />
        <button type="submit" className='bg-yellow-400 border-0 rounded-md w-[100px] px-2 py-1 font-extrabold'>
          {formatCurrency(totalPrice)}
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
