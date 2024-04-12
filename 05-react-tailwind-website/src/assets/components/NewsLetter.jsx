import React from "react";

const NewsLetter = () => {
    return (
        <div className="text-white w-full py-16">
            <div className="max-w-[1240px] mx-5 grid lg:grid-cols-3 md:mx-10 lg:mx-auto lg:px-5">
                <div className="lg:col-span-2">
                    <h1 className="text-3xl font-bold py-2 sm:text-4xl md:text-5xl">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>Sign up to newsletter and stay up to date.</p>
                </div>
                <div className="py-4">
                    <input
                        className="p-3 flex w-full rounded-md text-black"
                        type="email"
                        placeholder="Enter Email"
                    />
                    <button className="bg-[#00df9a] w-[200px] py-2 mx-auto rounded-md mt-3 text-black">
                        Notify me
                    </button>
                    <div className="my-5">
                        <p>
                            We care about the protection of your data. Read our{" "}
                            <span className="text-[#00df9a] underline">
                                Privacy Policy.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
