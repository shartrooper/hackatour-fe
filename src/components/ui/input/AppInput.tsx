import React from "react";

interface AppInputProps {
    placeholder: string;
}

const AppInput: React.FC<AppInputProps> = ({ placeholder }) => {
    return (
        <div>
            <div className='relative max-w-xs mt-2'>
                <input
                    type={"text"}
                    placeholder={placeholder}
                    className='w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-neptune-600 shadow-sm rounded-lg'
                />
            </div>
        </div>
    );
};

export default AppInput;
