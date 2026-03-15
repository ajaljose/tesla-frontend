const CustomButton = ({
    children,
    variant = "primary",
    size = "lg",
    rounded = "md",
    onClick,
    className = "",
}) => {
    const base =
        "font-semibold transition-all duration-200 flex items-center justify-center";

    const variants = {
        primary: "bg-red-600 text-white hover:bg-red-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        outline: "border border-red-600 text-red-600 hover:bg-red-50",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg",
        xxl: "px-10 py-5 text-xl",
    };

    const roundedStyles = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
    };

    return (
        <button
            onClick={onClick}
            className={`${base} ${variants[variant]} ${sizes[size]} ${roundedStyles[rounded]} ${className}`}
        >
            {children}
        </button>
    );
};

export default CustomButton;