import React, { useState } from "react";
import teslaLogo from "../../assets/tesla-text-logo.png";
import { PATHS } from "pages/common/constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
    return (
        <nav className="w-full bg-white px-6 md:px-8 py-3 flex items-center justify-between shadow-sm relative">

            <div className="flex items-center cursor-pointer">
                <img
                    src={teslaLogo}
                    alt="Tesla Logo"
                    className="h-4 object-contain"
                    onClick={() => navigate(PATHS.LANDING)}
                />
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
                <a href={PATHS.PRODUCT_LIST} className="hover:text-black">Vehicles</a>
                <a href="#" className="hover:text-black">Energy</a>
                <a href="#" className="hover:text-black">Charging</a>
                <a href="#" className="hover:text-black">Discover</a>
                <a href="#" className="hover:text-black">Shop</a>
            </div>

            <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
                <a href="#" className="text-gray-700 hover:text-black">
                    Support
                </a>

                <button className="bg-gray-200 px-4 py-1.5 rounded-md hover:bg-gray-300">
                    Sign In
                </button>

                <button className="bg-red-600 text-white px-4 py-1.5 rounded-md hover:bg-red-700">
                    Order Now
                </button>
            </div>

            <button
                className="md:hidden flex flex-col space-y-1"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
            </button>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col p-6 space-y-4 text-sm font-medium">
                    <a href="#" className="hover:text-black">Vehicles</a>
                    <a href="#" className="hover:text-black">Energy</a>
                    <a href="#" className="hover:text-black">Charging</a>
                    <a href="#" className="hover:text-black">Discover</a>
                    <a href="#" className="hover:text-black">Shop</a>
                    <a href="#" className="hover:text-black">Support</a>

                    <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
                        Sign In
                    </button>

                    <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                        Order Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;