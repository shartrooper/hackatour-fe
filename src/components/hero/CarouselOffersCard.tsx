import React from "react";
import { Ribbon } from "../ui/Ribbon";

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

const CarouselOffersCard: React.FC<{ offer: Offer }> = ({ offer }) => {
    const { destination, destinationImage, origin, price } = offer;
    return (
        <>
            <Ribbon>{destination}</Ribbon>
            <div className='flex gap-5 bg-white rounded-lg'>
                <img
                    src={destinationImage}
                    alt={destination}
                    className='w-32 h-auto object-cover rounded-s-md'
                />
                <div className='flex flex-col my-2'>
                    <p className='text-xs text-zinc-900 uppercase'>Ida y vuelta</p>
                    <h2 className='font-bold text-zinc-900'>
                        {origin} - {destination}
                    </h2>
                    <div className='mt-5'>
                        <p>Desde</p>
                        <p className='text-zinc-900 text-lg font-bold'>
                            {price.toLocaleString("es-AR")} USD
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselOffersCard;
