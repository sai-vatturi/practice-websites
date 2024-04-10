import React from "react";
import { ReactTyped, Typed } from "react-typed";

function Hero() {
    return (
        <div
            className="text-white max-w-[800px] flex flex-col w-full h-screen
        mt-[-96px] mx-auto text-center justify-center"
        >
            <p className="text-[#00df9a] font-bold text-lg sm:text-2l md:text-2xl">
                GROWING WITH DATA ANALYTICS
            </p>
            <h1 className="text-5xl md:text-7xl sm:text-5xl font-bold py-3 sm:py-4 md:py-5 ">
                Grow with data.
            </h1>
            <div className="flex justify-center items-center">
                <p className="text-2xl sm:text-2xl lg:text-3xl ">
                    Fast, flexible financing for
                </p>
                <ReactTyped
                    className="text-2xl font-bold ml-2 sm:text-3xl"
                    strings={["BTB", "BTC", "SASS"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <p className="text-gray-500 py-2 md:text-lg md:py-4 mx-10">
                Monitor your data analytics to increase revenue for BTB, BTC and
                SASS platforms.
            </p>
            <button className="bg-[#00df9a] w-[200px] py-2 mx-auto rounded-md mt-3 text-black">
                Get Started
            </button>
        </div>
    );
}

export default Hero;
