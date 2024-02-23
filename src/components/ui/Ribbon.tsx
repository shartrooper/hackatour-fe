import React from "react";

interface RibbonProps {
    children: React.ReactNode;
}

const Ribbon: React.FC<RibbonProps> = ({ children }) => {
    return (
        <div className='absolute h-full overflow-hidden'>
            <div
                className='bg-neptune-600 border-dashed border border-neptune-300 text-center text-white font-semibold origin-top mt-9 ml-9 w-80'
                style={{ transform: "translate(-50%, -50%) rotate(-45deg)" }}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Ribbon;