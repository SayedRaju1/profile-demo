import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'English', 'Bangla', 'Arabic'
];
const defaultOption = options[0]

const HeaderMain = () => {

    return (
        <nav className=" h-28 px-40 flex flex-col space-y-1.5 items-start justify-center bg-white shadow-md" >
            {/* First row */}
            <div className="w-full flex flex-row justify-between">
                <p className="text-2xl text-black font-light">R-COMMERCE</p>
                <div className="flex flex-row items-center space-x-3">
                    <p className="text-2xl text-red-600">+94 115 337 337</p>
                    <div className="h-10 p-4 flex items-center rounded-full cursor-pointer bg-red-500 text-white">GET A FREE DEMO</div>
                </div>
            </div>

            {/* Second row */}
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row space-x-8 text-1xl">
                    <p className="hover:text-red-600 cursor-pointer">HOW IT WORKS</p>
                    <p className="hover:text-red-600 cursor-pointer">ABOUT US</p>
                    <p className="hover:text-red-600 cursor-pointer">PRICING</p>
                    <p className="hover:text-red-600 cursor-pointer">OUR MERCHANTS</p>
                    <p className="hover:text-red-600 cursor-pointer">RESOURCES</p>
                </div>
                <div>
                    <Dropdown
                        options={options}
                        value={defaultOption}
                        placeholder="Select an option"
                        onChange={(option) => {
                            console.log(option.value);
                        }} />
                </div>
            </div>
        </nav >
    );
}

export default HeaderMain;
