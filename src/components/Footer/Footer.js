import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="px-20 2xl:px-32 text-white bg-deepBlue grid grid-cols-12 py-20">
            <div className=" flex flex-col justify-end p-5 col-span-3">
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore?</p>
                <div className="flex text-3xl text-white space-x-3 pt-4">
                    <FaFacebookSquare /> <FaLinkedin /> <FaYoutubeSquare />
                </div>
            </div>
            <div className=" col-span-3">
                <p className="text-lg py-1 font-semibold">Company</p>
                <p className="text-sm py-1">About Our Services</p>
                <p className="text-sm py-1">Our Affiliate Programs</p>
                <p className="text-sm py-1">View Our Blog</p>
                <p className="text-sm py-1">Check Our Careers</p>
            </div>
            <div className="  col-span-3">
                <p className="text-lg py-1 font-semibold">Legal</p>
                <p className="text-sm py-1">Nesciunt?</p>
                <p className="text-sm py-1">Eos!</p>
                <p className="text-sm py-1">Neque?</p>
                <p className="text-sm py-1">Beatae!</p>
            </div>
            <div className="  col-span-3">
                <p className="text-lg py-1 font-semibold">Get In Touch</p>
                <p className="text-sm py-1">Nesciunt?</p>
                <p className="text-sm pt-1 pb-2">Eos!</p>
                <div className="pt-2 "><input className="p-3 text-black outline-none rounded" type="text" /></div>
            </div>
        </div>
    );
};

export default Footer;