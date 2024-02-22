import HeaderIcons from "../ui/IconWrapper";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-neptune-400 text-neptune-900 shadow-lg py-2 px-1">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
        <div>
          <p className="text-center"> Sobre y Soporte </p>
        </div>
        <div>
          <p>Síguenos!</p>
          <div className="flex gap-2 justify-center lg:justify-start">
            <HeaderIcons icon={<InstagramIcon />} link="" />
            <HeaderIcons icon={<XIcon />} link="" />
            <HeaderIcons icon={<YouTubeIcon />} link="" />
            <HeaderIcons icon={<LinkedinIcon />} link="" />
            <HeaderIcons icon={<FacebookIcon />} link="" />
          </div>
        </div>
      </div>
      <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:opacity-100" />
      <p className=" text-center ">
        Copyright © {new Date().getFullYear()} HackaTour. Todos los derechos
        reservados.
      </p>
    </div>
  );
};

export default Footer;
