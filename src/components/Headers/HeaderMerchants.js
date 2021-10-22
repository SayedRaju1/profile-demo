import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GrMenu } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { IoMenuSharp } from "react-icons/io5";
import { BsSearch, BsBellFill } from "react-icons/bs";

import {
  HOME_ICON,
  INBOX_ICON,
  CALL_ICON,
  SEARCH_ICON,
  LOCK_ICON
} from '../../constants/images';

const HeaderMerchantts = () => {
  let history = useHistory();
  const handleClick = () => {
    console.log('title clicked');
    history.replace('/');
  }
  return (
    <nav className="fixed w-full px-20 grid grid-cols-2 justify-between  bg-offWhite z-10" >
      <div onClick={handleClick} className="flex items-center font-medium text-4xl py-4 hover: cursor-pointer">
        E-COM
      </div>
      <div className="flex items-center space-x-8 pl-28">
        <div className="flex items-center border bg-white border-blue-400 rounded w-full">
          <input className="px-8 outline-none w-full" type="text" placeholder="Search" />
          <div className="py-1.5 border px-4 rounded m-1px bg-deepBlue text-white text-lg font-extrabold"><BsSearch /></div>
        </div>
        <div className="text-deepBlue text-xl">
          <BsBellFill />
        </div>
        <div className="w-12 ">
          <img className="rounded-full" src='https://i.ibb.co/fF1p9nn/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg' alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center max-w-max py-1 px-10 bg-deepBlue text-white font-semibold rounded">
          <span className="text-2xl relative right-6"><IoMenuSharp /></span><span className="pl-2 relative right-6">Categories</span>
        </div>
      </div>
      <div className="flex flex-row  space-x-8 text-1xl justify-end text-right font-semibold">
        <Link className="border-gray-100 hover:border-yellow-400 border-b-2" to="/">
          <span className="px-2 text-black">HOME</span>
        </Link>
        <Link className="border-gray-100 hover:border-yellow-400 border-b-2" to="/">
          <span className="px-2 text-black">INBOX</span>
        </Link>
        <Link className="border-gray-100 hover:border-yellow-400 border-b-2" to="/cart">
          <span className="px-2 text-black">CART</span>
        </Link>
        <Link className="border-gray-100 hover:border-yellow-400 border-b-2" to="/">
          <span className="px-2 text-black">SEARCH</span>
        </Link>
        <Link className="border-gray-100 hover:border-yellow-400 border-b-2" to="/login">
          <span className="px-2 text-black">SIGN IN</span>
        </Link>
        <Link className="border-gray-100 hover:border-yellow-400 border-b-2" to="/register">
          <span className=" text-black">SIGN UP</span>
        </Link>
      </div>
    </nav >
  );
}

export default HeaderMerchantts;
