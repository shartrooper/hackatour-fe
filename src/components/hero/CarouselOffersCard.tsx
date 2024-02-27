import React from "react";
import Ribbon from "../ui/ribbon";

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
        <>
            <Ribbon>{offer.destination}</Ribbon>
            <div className='flex gap-5 bg-white rounded-lg'>
                <img
                    src={offer.destinationImage}
                    alt={offer.destination}
                    className='w-32 h-auto object-cover rounded-s-md'
                />
                <div className='flex flex-col my-2'>
                    <p className='text-xs text-zinc-900 uppercase'>Ida y vuelta</p>
                    <h2 className='font-bold text-zinc-900'>
                        {offer.origin} - {offer.destination}
                    </h2>
                    <div className='mt-5'>
                        <p>Desde</p>
                        <p className='text-zinc-900 text-lg font-bold'>
                            {offer.price.toLocaleString("es-AR")} USD
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TripCard;
