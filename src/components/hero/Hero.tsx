import heroImage from "/images/hero-image.jpg";
import CarouselOffers from "@/components/hero/CarouselOffers";

const Hero = () => {
    return (
        <div className='relative w-full h-full'>
            <div className='w-full h-full'>
                <img className='object-cover w-full h-full' src={heroImage} alt='Hero' />
            </div>
            <h1
                className='lg:absolute lg:top-20 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2
                bg-cover
                mx-auto
                max-w-2xl
                text-center
                text-sm
                lg:text-3xl
                uppercase
                font-bold
                px-4 py-2
                lg:border-b-2
                lg:border-neptune-50
                shadow-lg
                shadow-neptune-500
                text-neptune-50
                bg-neptune-400'>
                El placer de viajar juntos
            </h1>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <CarouselOffers />
            </div>
        </div>
    );
};

export default Hero;
