import React from 'react';
import Searchbar from '../UI/SearchBar/Searchbar';

const Header = () => {

  return (
    <nav className="bg-white shadow-md p-2 flex justify-center fixed w-screen">
      <Searchbar />
    </nav >
  );
}

export default Header;
