import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import React,{ useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";

function InfoSection({trip}) {
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
    <div>
      {/* Dynamic photo */}
      <img 
        src={photoUrl} 
        alt={trip?.userSelection?.location?.place_name || "place"} 
        className="h-[340px] w-full object-cover rounded-xl"
      />

      <div className="flex justify-between items-center">
        <div className="mt-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{trip?.userSelection?.location?.place_name}</h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md"> 📅 {trip?.userSelection?.noOfDays} Day</h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md"> 💰 {trip?.userSelection?.budget} Budget</h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md"> 👥 No. of traveler/s: {trip?.userSelection?.traveler}</h2>
          </div>
        </div>
        <Button><IoIosSend /></Button>
      </div>
    </div>
  );
}

export default InfoSection;
