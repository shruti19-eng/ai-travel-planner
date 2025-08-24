import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails } from '@/service/GlobalApi';

function HotelCardItem({hotel}) {
    const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    if (hotel) {
      GetPlacePhoto();
    }
  }, [hotel]);

  const GetPlacePhoto = async () => {
    try {
      const placeName = hotel?.name
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
    <Link 
            
            to={`https://www.google.com/maps/search/?api=1&query=${hotel?.name}, ${hotel?.address}`} 
            target='_blank'
          >
            <div className="hover:scale-105 transition-all cursor-pointer">
              <img 
                src={photoUrl} 
                alt={hotel?.name} 
                className='rounded-xl h-[180px] w-full object-cover'
              />
              <div className='my-2 flex flex-col gap-2'>
                <h2 className='font-medium'>{hotel?.name}</h2>
                <h2 className='text-xs text-gray-500'>📍 {hotel?.address}</h2>
                <h2 className='text-sm'>💰 {hotel?.price}</h2>
                <h2 className='text-sm'>⭐ {hotel?.rating}</h2>
              </div>
            </div>
          </Link>
  )
}

export default HotelCardItem