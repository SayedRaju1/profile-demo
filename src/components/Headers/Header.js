import React, { useState } from 'react';
import AddModal from '../UI/AddModal/AddModal';
import Searchbar from '../UI/SearchBar/Searchbar';

const Header = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  return (
    <nav className="bg-white shadow-md p-2 flex justify-center gap-4 fixed w-screen">
      <Searchbar />
      <button
        onClick={() => setShowAddModal(true)}
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white 
        rounded-lg border border-gray-300 hover:text-white hover:bg-blue-500 focus:ring-4 focus:ring-blue-300"
      >
        Add Person
      </button>
      {
        showAddModal &&
        <AddModal
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
        />
      }
    </nav >
  );
}

export default Header;
