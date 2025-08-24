import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GetPlaceDetails } from '@/service/GlobalApi';

function PlaceCardItem({place}) {
    const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    if (place) {
      GetPlacePhoto();
    }
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      const placeName = place.place
      if (!placeName) return;

      const result = await GetPlaceDetails(placeName); // <-- pass plain string
      console.log(result.data);

      // Take first image result from Unsplash
      if (result.data.results.length > 0) {
        setPhotoUrl(result.data.results[0].urls.regular);
      }
    } catch (err) {
      console.error("Error fetching photo:", err);
    }
  };


  return (
    <Link to={`https://www.google.com/maps/search/?api=1&query=${place?.place}`} 
    target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={photoUrl} 
        className='w-[130px] h-[130px] rounded-xl'/>
        <div>
            <h2 className='font-bold'>{place.place}</h2>
            <p className='text-sm text-gray-400'>{place.details}</p>
            <h2 className='text-xs font-medium mt-2 mb-2'>🏷️Ticket: {place.ticket_pricing}</h2>
            <Button size='sm'><FaMapLocationDot /></Button>
        </div>
    </div>
    </Link>
    
  )
}

export default PlaceCardItem