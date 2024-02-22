import heroImage from "/images/hero-image.jpg";
import CarouselOffers from "@/components/hero/CarouselOffers";

const Hero = () => {
    return (
        <div className='w-full h-full bg-cover' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='flex flex-col justify-center items-center'>
                <h1
                    className='my-5
        bg-cover
        mx-auto
        w-11/12
        text-center
        text-sm
        lg:text-3xl
        uppercase
        font-bold
        px-4 py-2
        border-b-2
        rounded-full
        border-neptune-50
        shadow-lg
        lg:max-w-screen-sm
        shadow-neptune-500
        text-neptune-50
        bg-neptune-400'>
                    El placer de viajar juntos
                </h1>
                <div className='mb-5 shadow-md rounded-md shadow-zinc-800'>
                    <CarouselOffers />
                </div>
            </div>
        </div>
    );
};

export default Hero;
