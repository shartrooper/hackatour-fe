import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IconWrapperProps {
    icon: ReactNode;
    title?: string;
    link: string;
}

const HeaderIcons: React.FC<IconWrapperProps> = ({ icon, title, link }) => {
    return (
        <>
            <Link
                to={link}
                className='flex flex-col items-center hover:bg-gray-900 hover:rounded-md px-3'>
                <div className='text-white'>{icon}</div>
                <p className='text-white'>{title}</p>
            </Link>
        </>
    );
};

export default HeaderIcons;
