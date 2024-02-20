import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import KayakingOutlinedIcon from "@mui/icons-material/KayakingOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
    return (
        <>
            <div className='bg-secondary text-primary py-2 lg:flex lg:items-center'>
                <div className='font-bold text-center uppercase text-lg lg:text-xl lg:ml-5'>
                    HackaTour
                    <div className='lg:hidden inline ml-5'>
                        <button className='cursor-pointer'>
                            <AccountCircleOutlinedIcon />
                        </button>
                    </div>
                </div>
                <div className='flex justify-center flex-wrap mt-2 gap-5 lg:mx-auto'>
                    {/* Avion */}
                    <HeaderIcons icon={<AirplaneTicketOutlinedIcon />} title={"Vuelos"} link='/' />
                    {/* Hotel */}
                    <HeaderIcons icon={<BedOutlinedIcon />} title={"Hoteles"} link='/' />
                    {/* Auto */}
                    <HeaderIcons icon={<TimeToLeaveOutlinedIcon />} title={"Autos"} link='/' />
                    {/* Colectivo */}
                    <HeaderIcons
                        icon={<DirectionsBusFilledOutlinedIcon />}
                        title={"Micros"}
                        link='/'
                    />
                    {/* Tren */}
                    <HeaderIcons icon={<TrainOutlinedIcon />} title={"Trenes"} link='/' />
                    {/* Excursiones */}
                    <HeaderIcons icon={<KayakingOutlinedIcon />} title={"Salidas"} link='/' />
                </div>
                <div className='hidden lg:flex lg:justify-center lg:mr-5'>
                    <button className='cursor-pointer'>
                        <AccountCircleOutlinedIcon />
                        <div className='hidden lg:inline lg:pl-2'>Iniciar Sesion</div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
