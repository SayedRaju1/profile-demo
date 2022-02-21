import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddModal = ({ showAddModal, setShowAddModal, person }) => {
    const [showWarningToast, setShowWarningToast] = useState(false)

    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [description, setDescription] = useState('')

    const closeEditModal = () => {
        setShowAddModal(false)
        setName('')
        setDesignation('')
        setDescription('')
    }



    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const handleDesignation = (e) => {
        setDesignation(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && designation && description) {
            console.log(name, designation, description);
        }
        else {
            toast("Wow so easy!");
        }
    }

    return (
        <div className={`bg-gray-900 bg-opacity-70 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal md:h-full md:inset-0`}>
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-end p-2">
                        <button onClick={closeEditModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add New Person</h3>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input onChange={(e) => handleName(e)} value={name} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="" required />
                        </div>
                        <div>
                            <label for="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Designation</label>
                            <input onChange={handleDesignation} value={designation} type="text" name="designation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="" required />
                        </div>
                        <div>
                            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                            <textarea onChange={handleDescription} value={description} type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="" required />
                        </div>

                        <button
                            onClick={(e) => handleSubmit(e)}
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Save
                        </button>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddModal;