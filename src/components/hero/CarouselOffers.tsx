import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import CarouselOffersCard from "./CarouselOffersCard";
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

const CarouselOffers: React.FC = () => {
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
    <Carousel
      className="w-full max-w-xs lg:max-w-5xl max-h-fit"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {offers.map((offer) => (
          <CarouselItem key={offer.id} className="lg:basis-1/3">
            <CarouselOffersCard offer={offer} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselOffers;
