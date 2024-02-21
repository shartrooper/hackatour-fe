import React, { ReactNode } from "react";

interface HeaderIconsProps {
    icon: ReactNode; // ReactNode can be any valid React node, including JSX elements
    title: string;
    link: string;
}

const HeaderIcons: React.FC<HeaderIconsProps> = ({ icon, title, link }) => {
    return (
        <>
            <a
                href={link}
                className='text-neptune-900 rounded-md p-2 cursor-pointer w-12 sm:hover:bg-neptune-900 sm:hover:text-neptune-400'>
                <div className='flex flex-col justify-center items-center'>
                    {icon}
                    <div className='text-center text-xs'>{title}</div>
                </div>
            </a>
        </>
    );
};

export default HeaderIcons;
