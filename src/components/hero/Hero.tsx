import { AppButton } from "../ui/button";
import { AppInput } from "../ui/input";
import CarouselOffers from "./CarouselOffers";

const Hero = () => {
  return (
    <div className="w-full h-full bg-[length:100%_100%] bg-hero-sm lg:bg-hero-lg">
      <div className="flex flex-col justify-center items-center mt-5">
        <h1
          className="my-5
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
        bg-neptune-400"
        >
          El placer de viajar juntos
        </h1>
        <div className="mb-5">
          <CarouselOffers />
        </div>
      </div>
      <div className="flex justify-center items-center mb-5 md:max-w-lg md:mx-auto">
        <div className="w-11/12 bg-slate-50 opacity-95 rounded-lg p-4 border border-neptune-400 shadow-xl">
          <h2 className="text-center text-zinc-800 text-lg lg:text-2xl font-bold">
            Encuentra tu próximo destino
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-end gap-5 justify-center items-center mt-5">
            <AppInput placeholder="Buscar" />
            <AppButton url="/search">Buscar</AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
