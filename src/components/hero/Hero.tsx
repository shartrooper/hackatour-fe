import AppButton from "../ui/AppButton";
import AppInput from "../ui/AppInput";
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
                <div className='mb-5'>
                    <CarouselOffers />
                </div>
            </div>
            <div className='flex justify-center items-center mb-5 md:max-w-lg md:mx-auto'>
                <div className='w-11/12 bg-neptune-400 bg-opacity-70 rounded-lg p-4 border border-neptune-400 shadow-xl'>
                    <h2 className='text-center text-zinc-800 text-lg lg:text-2xl font-bold'>
                        Encuentra tu próximo destino
                    </h2>
                    <div className='flex flex-col lg:flex-row lg:gap-5 justify-center items-center'>
                        <div className='my-5'>
                            <AppInput className='bg-white max-h-20'>Buscar</AppInput>
                        </div>
                        <div className=''>
                            <AppButton url='/search'>Buscar</AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
