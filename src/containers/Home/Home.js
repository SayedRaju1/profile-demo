import React, { useState, useEffect } from "react";
import withErrorModal from "../../components/HOC/withErrorModal/withErrorModal";
import PersonCard from "../../components/PersonCard/PersonCard";
import EditModal from "../../components/UI/EditModal/EditModal";
import Searchbar from "../../components/UI/SearchBar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { allUsersData } from "../../store/actions/users/users";

import { dummyData } from "../../dummyData";
import { toast, ToastContainer } from "react-toastify";
import { userDeleteAction } from "../../store/actions/DeleteUser/deleteUser";

function Home() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPerson, setselectedPerson] = useState({});
  const users = useSelector((state) => state.users.data?.data);
  const isUsersLoading = useSelector((state) => state.users.loading);
  const isDeleteLoading = useSelector((state) => state.deleteUser.loading);
  const isUserAdded = useSelector((state) => state.newUserAdd.loading);
  const isUserEdited = useSelector((state) => state.editUser.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsersData());
  }, [dispatch]);


  console.log('isUsersLoading ', isUsersLoading);


  // isUsersLoading ? toast.info("Working", {
  //   position: "top-center",
  //   hideProgressBar: true,
  //   autoClose: false,
  // }) : null



  const handleDelete = (userId) => {
    toast.info("Working", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 500,
    });
    const response = dispatch(userDeleteAction(userId));
    response.then((result) => {
      if (result?.type === 'DELETE_USER_SUCCESS') {
        dispatch(allUsersData());
        toast.success(result.data.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      else if (result?.type === 'DELETE_USER_FAIL') {
        toast.error(result.error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      else {
        toast.error('Something went wrong', {
          position: "top-center",
          hideProgressBar: true,
        });
      }
    });
  }
  console.log("users ", users);
  return (
    <div className="py-20">
      <div className="grid grid-cols-12 place-items-center px-5 2xl:px-10 gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto my-0">
        {users && users.length > 0 ? users.map((person) => (
          <PersonCard
            person={person}
            setShowEditModal={setShowEditModal}
            showEditModal={showEditModal}
            setselectedPerson={setselectedPerson}
            handleDelete={handleDelete}
            key={person._id}
          />
        )) : isUsersLoading ?

          <div className="text-center text-2xl text-gray-600 col-span-12 h-40  flex justify-center items-center">
            <p>Loading....</p>
          </div>
          :
          <div className="text-center text-2xl text-gray-600 col-span-12 h-40  flex justify-center items-center">
            <p>List Empty, Add New Person</p>
          </div>
        }

      </div>
      {showEditModal && (
        <EditModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          person={selectedPerson}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default withErrorModal(Home);
