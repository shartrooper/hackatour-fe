import React, { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import CarouselOffersCard from "@/components/hero/CarouselOffersCard";
import fakeData from "@/config/fakeData.json";

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

const CarouselDemo: React.FC = () => {
    const [offers, setOffers] = useState<Offer[]>([]);
    // const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setOffers(fakeData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <Carousel className='w-full max-w-xs max-h-fit'>
            <CarouselContent>
                {offers.map((offer) => (
                    <CarouselItem key={offer.id}>
                        <CarouselOffersCard offer={offer} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default CarouselDemo;
