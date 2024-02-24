import React from "react";

interface RibbonProps {
    children: React.ReactNode;
    className?: string;
}

const Ribbon: React.FC<RibbonProps> = ({ children, className }) => {
    return (
        <div className='absolute h-48 overflow-hidden'>
            <div
                className={`${className} bg-neptune-600 border border-neptune-800 text-center text-white font-semibold mt-9 ml-9 w-80`}
                style={{ transform: "translate(-50%, -50%) rotate(-45deg)" }}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Ribbon;
