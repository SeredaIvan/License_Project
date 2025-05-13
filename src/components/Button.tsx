
import React from "react";

type ButtonProps = {
    label: string;
    color?: string;
    size?: "small" | "medium" | "large";
};

const Button: React.FC<ButtonProps> = ({ label, color = "blue", size = "medium" }) => {
    const sizeClass = size === "small" ? "px-4 py-2" : size === "large" ? "px-6 py-3" : "px-5 py-2";
    return (
        <button className={`${sizeClass} bg-${color}-500 text-white rounded-md`}>
            {label}
        </button>
    );
};

export default Button;
