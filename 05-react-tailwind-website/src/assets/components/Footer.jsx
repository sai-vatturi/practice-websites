import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16  px-4 grid md:grid-cols-3 gap-8 text-gray-300">
            <div className="mx-auto">
                <h1 className="text-[#00df9a] font-bold text-3xl">REACT.</h1>
                <p className="py-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa iure sint quas voluptates quia pariatur repellendus
                    neque illum reiciendis similique?
                </p>
                <div className="flex justify-between md:w-[75%] my-8">
                    <FaDribbbleSquare size={30} />
                    <FaFacebookSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                </div>
            </div>

            <div className="grid grid-cols-4 md:col-span-2 md:mt-8">
                <div>
                    <h6 className="text-gray-400">Solutions</h6>
                    <ul className="text-sm flex flex-col basis-4">
                        <li className="pt-2">Analytics</li>
                        <li className="pt-2">Marketing</li>
                        <li className="pt-2">Commerce</li>
                        <li className="pt-2">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-gray-400">Solutions</h6>
                    <ul className="text-sm">
                        <li className="pt-2">Pricing</li>
                        <li className="pt-2">Documentation</li>
                        <li className="pt-2">Guides</li>
                        <li className="pt-2">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-gray-400">Solutions</h6>
                    <ul className="text-sm">
                        <li className="pt-2">About</li>
                        <li className="pt-2">Blog</li>
                        <li className="pt-2">Jobs</li>
                        <li className="pt-2">Press</li>
                        <li className="pt-2">Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-gray-400">Solutions</h6>
                    <ul className="text-sm">
                        <li className="pt-2">Analytics</li>
                        <li className="pt-2">Marketing</li>
                        <li className="pt-2">Commerce</li>
                        <li className="pt-2">Insights</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
