import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="text-white flex justify-between mx-auto h-24 w-full max-w-[1240px] items-center px-5">
            <div className="text-[#00df9a] font-bold text-3xl">REACT.</div>
            <ul className="hidden md:flex">
                <li className="p-2">Home</li>
                <li className="p-2">Resources</li>
                <li className="p-2">Company</li>
                <li className="p-2">About</li>
                <li className="p-2">Contact Us</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>

            <div
                className={
                    !nav
                        ? "w-[60%] fixed bg-[#000300] left-0 h-full top-0 border-r border-r-gray-800 ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <div className="text-[#00df9a] font-bold h-24 text-3xl m-4">
                    REACT.
                </div>
                <ul className="p-4 uppercase">
                    <li className="p-2 border-b border-gray-600">Home</li>
                    <li className="p-2 border-b border-gray-600">Resources</li>
                    <li className="p-2 border-b border-gray-600">Company</li>
                    <li className="p-2 border-b border-gray-600">About</li>
                    <li className="p-2">Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
