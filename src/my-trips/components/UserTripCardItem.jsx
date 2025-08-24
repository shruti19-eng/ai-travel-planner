import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
    const [photoUrl, setPhotoUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    try {
      const placeName = trip?.userSelection?.location?.place_name;
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
    <Link to={'/view-trip/' + trip?._id}>
    <div className='hover:scale-105 transition-all cursor-pointer '>
        <img src={photoUrl} alt="" className='object-cover rounded-xl h-[220px]'/>
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.place_name}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays}2 Days trip with {trip?.userSelection?.budget} Luxury Budget</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem