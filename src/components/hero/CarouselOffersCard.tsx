import React from "react";

interface Offer {
    id: number;
    destination: string;
    origin: string;
    departureDate: string;
    arrivalDate: string;
    price: number;
    destinationDescription: string;
    destinationImage: string;
}

const TripCard: React.FC<{ offer: Offer }> = ({ offer }) => {
    return (
        <div className='border border-gray-200 bg-neptune-200 p-4 rounded-lg shadow-md'>
            <img
                src={offer.destinationImage}
                alt={offer.destination}
                className='w-full h-40 object-cover rounded-md mb-4'
            />
            <h2 className='text-xl font-semibold mb-2'>{offer.destination}</h2>
            <p className='text-gray-600 mb-2'>{offer.destinationDescription}</p>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500'>
                    {offer.origin} - {offer.destination}
                </p>
                <p className='text-gray-500'>${offer.price}</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <p className='text-gray-500'>Departure: {offer.departureDate}</p>
                <p className='text-gray-500'>Arrival: {offer.arrivalDate}</p>
            </div>
        </div>
    );
};

export default TripCard;
