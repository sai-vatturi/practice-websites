import React from "react";
import single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return (
        <div className="w-full py-18 bg-white mx-auto">
            <div className="grid md:grid-cols-3 max-w-[1240px] px-5 gap-12 py-10">
                <div className="w-full text-center shadow-lg hover:scale-105 duration-300 my-12">
                    <img
                        className="w-20 bg-white mx-auto mt-[-3rem]"
                        src={single}
                        alt="single"
                    />
                    <h1 className="text-2xl font-bold pt-10">Single User</h1>
                    <h1 className="text-3xl font-bold my-5">$149</h1>
                    <div className="">
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            One Granted User
                        </p>
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            Send upto 2GB
                        </p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] py-2 mx-auto rounded-md mt-3 text-black my-5 hover:text-[#00df9a] hover:bg-black">
                        Start Trial
                    </button>
                </div>
                <div className="w-full text-center shadow-lg hover:scale-105 duration-300 my-12">
                    <img
                        className="w-20 bg-white mx-auto mt-[-3rem]"
                        src={Double}
                        alt="partnership"
                    />
                    <h1 className="text-2xl font-bold pt-10">Partnership</h1>
                    <h1 className="text-3xl font-bold my-5">$199</h1>
                    <div className="">
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            1 TB Storage
                        </p>
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            3 Users allowed
                        </p>
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            Send upto 10GB
                        </p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] py-2 mx-auto rounded-md mt-3 text-black my-5 hover:text-[#00df9a] hover:bg-black">
                        Start Trial
                    </button>
                </div>
                <div className="w-full text-center shadow-lg hover:scale-105 duration-300 my-12">
                    <img
                        className="w-20 bg-white mx-auto mt-[-3rem]"
                        src={Triple}
                        alt="groupaccount"
                    />
                    <h1 className="text-2xl font-bold pt-10">Group Account</h1>
                    <h1 className="text-3xl font-bold my-5">$299</h1>
                    <div className="">
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            5 TB Storage
                        </p>
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            10 Users Allowed
                        </p>
                        <p className="py-2 border-b-[1px] border-gray-300 mx-5">
                            Send upto 20GB
                        </p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] py-2 mx-auto rounded-md mt-3 text-black my-5 hover:text-[#00df9a] hover:bg-black">
                        Start Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
