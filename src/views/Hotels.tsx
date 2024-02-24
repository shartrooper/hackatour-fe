import HotelCard from "@/components/ui/cards/HotelCard";

const Hotels = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center items-center'>
                <HotelCard
                    name={"Hotel Libertador"}
                    price={24000}
                    nights={3}
                    address={"123 Wallaby Avenue, Park Road"}
                    city={"Lima"}
                    country={"Peru"}
                    rating={1}
                    image={
                        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    }
                    stars={4}
                    rooms={1}
                    people={2}
                    link={"#"}
                />
                <HotelCard
                    name={"Libertador"}
                    price={24000}
                    nights={3}
                    address={"123 Wallaby Avenue, Park Road"}
                    city={"Lima"}
                    country={"Peru"}
                    rating={2}
                    image={
                        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    }
                    stars={5}
                    rooms={2}
                    people={4}
                    link={"#"}
                />
                <HotelCard
                    name={"Libertador"}
                    price={24000}
                    nights={3}
                    address={"123 Wallaby Avenue, Park Road"}
                    city={"Lima"}
                    country={"Peru"}
                    rating={3}
                    image={
                        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    }
                    stars={2}
                    rooms={1}
                    people={1}
                    link={"#"}
                />
                <HotelCard
                    name={"Libertador"}
                    price={24000}
                    nights={3}
                    address={"123 Wallaby Avenue, Park Road"}
                    city={"Lima"}
                    country={"Peru"}
                    rating={4}
                    image={
                        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    }
                    stars={2}
                    rooms={1}
                    people={1}
                    link={"#"}
                />
                <HotelCard
                    name={"Libertador"}
                    price={24000}
                    nights={3}
                    address={"123 Wallaby Avenue, Park Road"}
                    city={"Lima"}
                    country={"Peru"}
                    rating={5}
                    image={
                        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    }
                    stars={2}
                    rooms={1}
                    people={1}
                    link={"#"}
                />
            </div>
        </>
    );
};

export default Hotels;
