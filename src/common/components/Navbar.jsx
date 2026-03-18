import React, { useState } from "react";
import teslaLogo from "../../assets/tesla-text-logo.png";
import { PATHS } from "pages/common/constants";
import { useNavigate, useLocation } from "react-router-dom";
import CustomButton from "pages/common/components/CustomButton";
import { useHeroCarSlug } from "pages/common-services/selectors";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const heroCarSlug = useHeroCarSlug()
    const navItems = [
        { label: "Home", path: PATHS.LANDING },
        { label: "Vehicles", path: PATHS.PRODUCT_LIST },
        { label: "Contact Us", path: PATHS.CONTACT_US }
    ];

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
                {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                        <div
                            key={item.path}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => navigate(item.path)}
                        >
                            <span className={`${isActive ? "text-black" : "hover:text-black"}`}>
                                {item.label}
                            </span>

                            {isActive && (
                                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                            )}
                            {!isActive && (
                                <span className="w-1.5 h-1.5 bg-white-600 rounded-full"></span>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className={`hidden md:flex items-center space-x-4 text-sm font-medium ${pathname !== PATHS.LANDING ? 'invisible' : ''}`}>
                <CustomButton
                    variant="primary"
                    size="sm"
                    rounded="lg"
                    onClick={() => navigate(PATHS.CAR_DETAILS.replace(':slug', heroCarSlug))}
                >
                    Order Now
                </CustomButton>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex flex-col space-y-1 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col p-6 space-y-4 text-sm font-medium z-50">
                    {navItems.map((item) => (
                        <div
                            key={item.path}
                            className="flex items-center justify-between"
                            onClick={() => {
                                navigate(item.path)
                                setMenuOpen(!menuOpen)
                            }}
                        >
                            <span>{item.label}</span>

                            {pathname === item.path && (
                                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;