import { useState } from "react";
import Ribbon from "../Ribbon";
import AppButton from "../button/AppButton";
import HotelLocationIcon from "../svg/HotelLocationIcon";
import MoonIcon from "../svg/MoonIcon";
import RoomsIcon from "../svg/RoomsIcon";
import StarIcon from "../svg/StarIcon";
import { Skeleton } from "@/components/ui/skeleton";

interface HotelCardProps {
    name: string;
    price: number;
    nights: number;
    address: string;
    city: string;
    country: string;
    rating: number;
    image: string;
    stars: number;
    rooms: number;
    people: number;
    link: string;
    entryDate: string;
    outDate: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
    name,
    price,
    nights,
    address,
    city,
    country,
    rating,
    image,
    stars,
    rooms,
    people,
    link,
    entryDate,
    outDate,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className='p-6 sm:max-w-md font-sans w-full'>
            <div className='block rounded-lg p-4 shadow-sm shadow-neptune-400 hover:shadow-md hover:shadow-neptune-400'>
                {!imageLoaded && <Skeleton className='h-56 w-full rounded-md' />}
                <Ribbon className={`${!imageLoaded ? "hidden" : ""}`}>{rating} ⭐</Ribbon>
                <img
                    alt='Imagen del hotel'
                    src={image}
                    className={`h-56 w-full rounded-md object-cover ${
                        !imageLoaded ? "hidden" : ""
                    }`}
                    onLoad={handleImageLoad}
                />

                <div className='mt-2'>
                    <dl>
                        <div>
                            <dt className='sr-only'>Nombre</dt>
                            <dd className='font-bold'>{name}</dd>
                        </div>

                        <div>
                            <dt className='sr-only'>Precio</dt>
                            <dd className='text-md font-bold text-neptune-500'>
                                ${price.toLocaleString("es-AR")}/día
                            </dd>
                        </div>

                        <div>
                            <dt className='sr-only'>Dirección</dt>
                            <dd className='font-medium'>{address}</dd>
                        </div>
                        <div className='flex'>
                            <dt className='sr-only'>Ubicación del Hotel</dt>
                            <dd className='flex items-center gap-2 text-neptune-700'>
                                <HotelLocationIcon className='h-4 w-4' />
                            </dd>
                            <dd className='font-medium'>
                                {city}, {country}
                            </dd>
                        </div>
                    </dl>
                    <div className='mt-6 flex items-center justify-center gap-8 text-xs'>
                        <p>Fecha de Entrada: {entryDate}</p>
                        <p>Fecha de Salida: {outDate}</p>
                    </div>
                    <div className='mt-6 flex items-center justify-center gap-8 text-xs'>
                        <div className='text-center sm:flex sm:gap-2 sm:items-center sm:justify-center'>
                            <StarIcon className='h-10 w-10 sm:h-8 sm:w-8 mx-auto' />
                            <div className='mt-1.5 sm:mt-0'>
                                <p className='font-medium'>{stars}</p>
                                <p className='text-gray-500'>
                                    {stars > 1 ? "Estrellas" : "Estrella"}
                                </p>
                            </div>
                        </div>
                        <div className='text-center sm:flex sm:gap-2 sm:items-center sm:justify-center'>
                            <RoomsIcon className='h-10 w-10 sm:h-8 sm:w-8 mx-auto' />
                            <div className='mt-1.5 sm:mt-0'>
                                <p className='font-medium'>
                                    {people} {people > 1 ? "Personas" : "Persona"}
                                </p>
                                <p className='text-gray-500'>
                                    {rooms} {rooms > 1 ? "Habitaciones" : "Habitacion"}
                                </p>
                            </div>
                        </div>
                        <div className='text-center sm:flex sm:gap-2 sm:items-center sm:justify-center'>
                            <MoonIcon className='h-10 w-10 sm:h-8 sm:w-8 mx-auto' />
                            <div className='mt-1.5 sm:mt-0'>
                                <p className='font-medium'>
                                    {nights} {nights > 1 ? "noches" : "noche"}
                                </p>
                                <p className='text-gray-500'>Estadía</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 mb-5 text-center z-40'>
                    <AppButton url={link}>Reservar</AppButton>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
