import React from 'react'
import PlaceCardItem from './PlaceCardItem'


function PlacesToVisit({ trip }) {
  return (
    <div>
        <h2 className='font-bold text-lg'>Places to visit</h2>
        <div>
            {trip.tripData?.itinerary?.map((item) => (
                <div key={item.day} className='mt-5'>
                    
                    <h2 className='font-medium text-lg'>{item.day}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                    {item.plan.map((place, placeIndex) => (
                        <div  key={place.id || placeIndex} className=''>
                            <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                            
                            <PlaceCardItem place={place} />
                            
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    
    </div>
  )
}

export default PlacesToVisit
