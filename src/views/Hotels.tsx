import { HotelCard } from "@/components/ui/cards";

const Hotels = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <HotelCard
          name={"The Plaza Hotel"}
          price={450}
          nights={3}
          address={
            "Fifth Avenue at Central Park South, New York City, New York, 10019, USA"
          }
          city={"New York City"}
          country={"USA"}
          rating={4.7}
          image={"https://source.unsplash.com/featured/?plaza-hotel"}
          stars={5}
          rooms={4}
          people={2}
          link={"#"}
          entryDate="01/12/2024"
          outDate="04/12/2024"
        />

        <HotelCard
          name={"The Ritz-Carlton, Kyoto"}
          price={650}
          nights={3}
          address={
            "Kamogawa Nijo-Ohashi Hotori, Nakagyo-ku, Kyoto, 604-0902, Japan"
          }
          city={"Kyoto"}
          country={"Japan"}
          rating={4.9}
          image={"https://source.unsplash.com/featured/?ritz-carlton-kyoto"}
          stars={5}
          rooms={5}
          people={2}
          link={"#"}
          entryDate="05/05/2024"
          outDate="08/05/2024"
        />

        <HotelCard
          name={"Burj Al Arab Jumeirah"}
          price={1200}
          nights={10}
          address={"Jumeirah St - Dubai - United Arab Emirates"}
          city={"Dubai"}
          country={"United Arab Emirates"}
          rating={4.8}
          image={"https://source.unsplash.com/featured/?burj-al-arab"}
          stars={5}
          rooms={7}
          people={4}
          link={"#"}
          entryDate="01/08/2024"
          outDate="10/08/2024"
        />

        <HotelCard
          name={"Grand Hotel Tremezzo"}
          price={550}
          nights={7}
          address={"Via Regina, 8, 22016 Tremezzina CO, Italy"}
          city={"Tremezzina"}
          country={"Italy"}
          rating={4.6}
          image={"https://source.unsplash.com/featured/?grand-hotel-tremezzo"}
          stars={5}
          rooms={4}
          people={2}
          link={"#"}
          entryDate="07/04/2024"
          outDate="14/04/2024"
        />

        <HotelCard
          name={"Fairmont Banff Springs"}
          price={700}
          nights={5}
          address={"405 Spray Ave, Banff, AB T1L 1J4, Canada"}
          city={"Banff"}
          country={"Canada"}
          rating={4.7}
          image={"https://source.unsplash.com/featured/?fairmont-banff-springs"}
          stars={5}
          rooms={5}
          people={3}
          link={"#"}
          entryDate="05/11/2024"
          outDate="10/11/2024"
        />
      </div>
    </>
  );
};

export default Hotels;
