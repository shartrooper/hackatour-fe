import React from "react";

// RRD
import { Link } from "react-router-dom";

interface OutlinedButtonProps {
    url: string;
    children: React.ReactNode;
    disabled?: boolean;
}

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({ children, url, disabled }) => {
    return (
        <Link
            to={disabled ? "#" : url}
            className={
                disabled
                    ? "border border-neptune-700 text-neptune-700 rounded-lg py-3 px-6 opacity-50 cursor-not-allowed"
                    : "border border-neptune-700 text-neptune-700 rounded-lg py-3 px-6 hover:bg-neptune-50 active:bg-neptune-100 transition duration-300 ease-in-out"
            }>
            {children}
        </Link>
    );
};