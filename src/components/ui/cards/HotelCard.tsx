import Ribbon from "../Ribbon";
import AppButton from "../button/AppButton";
import HotelLocationIcon from "../svg/HotelLocationIcon";
import MoonIcon from "../svg/MoonIcon";
import RoomsIcon from "../svg/RoomsIcon";
import StarIcon from "../svg/StarIcon";

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
}) => {
    return (
        <div className='p-6 sm:max-w-md font-sans w-full'>
            <div className='block rounded-lg p-4 shadow-sm shadow-neptune-400 hover:shadow-md hover:shadow-neptune-400'>
                <Ribbon>
                    {Array.from({ length: rating }).map((_, index) => (
                        <span key={index}>⭐</span>
                    ))}
                </Ribbon>
                <img alt='' src={image} className='h-56 w-full rounded-md object-cover' />
                <div className='mt-2'>
                    <dl>
                        <div>
                            <dt className='sr-only'>Nombre</dt>
                            <dd className='font-bold'>{name}</dd>
                        </div>

                        <div>
                            <dt className='sr-only'>Precio</dt>
                            <dd className='text-sm text-gray-500'>
                                ${price.toLocaleString("es-AR")}/noche
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
                    <div className='mt-6 flex items-center gap-8 text-xs'>
                        <div className='sm:gap-2'>
                            <StarIcon className='h-10 w-10' />
                            <div className='mt-1.5 sm:mt-0'>
                                <p className='text-gray-500'>
                                    {stars > 1 ? "Estrellas" : "Estrella"}
                                </p>
                                <p className='font-medium'>{stars}</p>
                            </div>
                        </div>
                        <div className='sm:gap-2'>
                            <RoomsIcon className='h-10 w-10' />
                            <div className='mt-1.5 sm:mt-0'>
                                <p className='text-gray-500'>
                                    {rooms} {rooms > 1 ? "Habitaciones" : "Habitacion"}
                                </p>
                                <p className='font-medium'>
                                    {people} {people > 1 ? "Personas" : "Persona"}
                                </p>
                            </div>
                        </div>
                        <div className='sm:shrink-0 sm:items-center sm:gap-2'>
                            <MoonIcon className='h-10 w-10' />
                            <div className='mt-1.5 sm:mt-0'>
                                <p className='text-gray-500'>Estadía</p>
                                <p className='font-medium'>
                                    {nights} {nights > 1 ? "noches" : "noche"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 mb-5 text-center z-40'>
                    <AppButton url='http://www.google.com'>Reservar</AppButton>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
