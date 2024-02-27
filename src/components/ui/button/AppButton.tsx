import React from "react";

// RRD
import { Link } from "react-router-dom";

interface AppButtonProps {
    url: string;
    children: React.ReactNode;
    disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({ children, url, disabled }) => {
    return (
        <Link
            to={disabled ? "#" : url}
            className={
                disabled
                    ? "bg-neptune-200 text-neptune-700 rounded-lg py-3 px-6 opacity-50 cursor-not-allowed"
                    : "bg-neptune-500 text-neptune-50 rounded-lg py-3 px-6 hover:bg-neptune-600 active:bg-neptune-700 transition duration-300 ease-in-out"
            }>
            {children}
        </Link>
    );
};