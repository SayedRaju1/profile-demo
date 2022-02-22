import React, { useState, useEffect } from "react";
import withErrorModal from "../../components/HOC/withErrorModal/withErrorModal";
import PersonCard from "../../components/PersonCard/PersonCard";
import EditModal from "../../components/UI/EditModal/EditModal";
import Searchbar from "../../components/UI/SearchBar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { allUsersData } from "../../store/actions/users/users";

import { dummyData } from "../../dummyData";

function Home() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPerson, setselectedPerson] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsersData());
  }, []);

  const users = useSelector((state) => {
    //things to do
  });

  //   console.log(users);

  return (
    <div className="py-20">
      <div className="grid grid-cols-12 place-items-center px-5 2xl:px-10 gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto my-0">
        {dummyData.map((person) => (
          <PersonCard
            person={person}
            setShowEditModal={setShowEditModal}
            showEditModal={showEditModal}
            setselectedPerson={setselectedPerson}
          />
        ))}
      </div>
      {showEditModal && (
        <EditModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          person={selectedPerson}
        />
      )}
    </div>
  );
}

export default withErrorModal(Home);
