import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import KayakingOutlinedIcon from "@mui/icons-material/KayakingOutlined";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo1 from "/images/logo1.png";

import { Link } from "react-router-dom";
import { HeaderIcons as IconWrapper } from "../ui/iconwrapper";

export const Header = () => {
  const menuMap = [
    {
      icon: <AirplaneTicketOutlinedIcon />,
      title: "Vuelos",
      link: "/flights",
    },
    {
      icon: <BedOutlinedIcon />,
      title: "Hoteles",
      link: "/hotels",
    },
    {
      icon: <TimeToLeaveOutlinedIcon />,
      title: "Autos",
      link: "/cars",
    },
    {
      icon: <DirectionsBusFilledOutlinedIcon />,
      title: "Micros",
      link: "/buses",
    },
    {
      icon: <TrainOutlinedIcon />,
      title: "Trenes",
      link: "/trains",
    },
    {
      icon: <KayakingOutlinedIcon />,
      title: "Actividades",
      link: "/activities",
    },
  ];

  return (
    <>
      <nav className="bg-gray-800 p-2">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex items-center">
            {menuMap.map((item, index) => (
              <IconWrapper
                key={index}
                icon={item.icon}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>

          <div className="flex items-center">
            <HeaderBurgerMenu menuMap={menuMap} />
            <Link to={"/"} className="flex-shrink-0 ml-4 z-50">
              <div className="absolute left-1/2 top-3 transform -translate-x-1/2 bg-white border-4 border-gray-800 rounded-full overflow-hidden">
                <img src={logo1} alt="logo" className="w-20" />
              </div>
            </Link>
          </div>

          <div className="flex items-center">
            <IconWrapper
              icon={<AccountCircleOutlinedIcon />}
              title="Iniciar sesión"
              link="/login"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
