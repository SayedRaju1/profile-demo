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
  const isUserDeleteLoading = useSelector((state) => state.deleteUser.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsersData());
  }, []);


  console.log(users);
  console.log('isUsersLoading ', isUsersLoading);
  console.log('isUserDeleteLoading ', isUserDeleteLoading);

  const handleDelete = (userId) => {
    console.log(userId);
    const response = dispatch(userDeleteAction(userId));
    response.then((result) => {
      console.log({ result });
      if (result?.type === 'DELETE_USER_SUCCESS') {
        toast.success(result.data.message, {
          position: "top-center",
        });
      }
      else if (result?.type === 'DELETE_USER_FAIL') {
        toast.error('Something Went Wrong', {
          position: "top-center",
        });
      }
    });
  }
  return (
    <div className="py-20">
      <div className="grid grid-cols-12 place-items-center px-5 2xl:px-10 gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto my-0">
        {users ? users.map((person) => (
          <PersonCard
            person={person}
            setShowEditModal={setShowEditModal}
            showEditModal={showEditModal}
            setselectedPerson={setselectedPerson}
            handleDelete={handleDelete}
            kay={person._id}
          />
        )) : <p className="inline-flex justify-center items-center">Loading</p>}
      </div>
      {showEditModal && (
        <EditModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          person={selectedPerson}
        />
      )}
      <ToastContainer
        position="top-center"
      />
    </div>
  );
}

export default withErrorModal(Home);
