import HeaderIcons from "../ui/IconWrapper";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { LinkedinIcon } from "lucide-react";

import logo2 from "/images/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className='text-gray-600 body-font'>
                <hr className='border-gray-300 mt-5' />
                <div className='container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                    <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10'>
                        <img className='w-44 h-auto mx-auto' src={logo2} alt='HackaTour logo' />
                        <p className='mt-2 text-sm text-gray-500 text-center'>
                            Donde tus sueños se convierten en vacaciones hechas realidad.
                        </p>
                    </div>
                    <div className='flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first'>
                        <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                            <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                                CATEGORIAS
                            </h2>
                            <nav className='list-none mb-10'>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Vuelos
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Hoteles
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Autos
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Micros
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Trenes
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Actividades
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                            <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                                SOBRE HACKATOUR
                            </h2>
                            <nav className='list-none mb-10'>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Quienes Somos
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Feriados Nacionales
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Afiliados
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Promocionar Hotel
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
                            <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                                SOPORTE
                            </h2>
                            <nav className='list-none mb-10'>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Preguntas Frecuentes
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Contacto
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Política de privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className='text-gray-600 hover:text-gray-800'>
                                        Términos y condiciones
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800'>
                    <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
                        <p className='text-gray-100 text-sm text-center sm:text-left'>
                            © {new Date().getFullYear()} HackaTour
                        </p>
                        <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
                            <HeaderIcons icon={<InstagramIcon />} link='' />
                            <HeaderIcons icon={<XIcon />} link='' />
                            <HeaderIcons icon={<YouTubeIcon />} link='' />
                            <HeaderIcons icon={<LinkedinIcon />} link='' />
                            <HeaderIcons icon={<FacebookIcon />} link='' />
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
