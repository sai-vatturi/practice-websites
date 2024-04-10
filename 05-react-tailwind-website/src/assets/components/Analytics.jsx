import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
    return (
        <div className="bg-white w-full py-16 px-4">
            <div className="grid sm:grid-cols-2 max-w-[1240px]">
                <img className="py-5 w-[500px] mx-auto" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] uppercase font-bold text-lg sm:text-2l md:text-2xl">
                        Data Analytics Dashboard
                    </p>
                    <h1 className="text-3xl md:text-5xl sm:text-4xl font-bold py-3 sm:py-4 md:py-5 ">
                        Manage Data Analytics Centrally
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam modi labore maiores, ipsa nobis neque velit ab
                        sequi tempora ipsam cum perspiciatis laborum deleniti
                        asperiores atque iusto facere, sapiente dolorum.
                    </p>
                    <button className="bg-black w-[200px] py-2 rounded-md mt-6 text-[#00df9a] mx-auto sm:mx-0">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
