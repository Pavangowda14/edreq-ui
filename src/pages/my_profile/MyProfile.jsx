import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useFetchUserProfile } from "./api/getUserProfile";
import { useUpdateUserProfile } from "./api/updateUserProfile";
import Loader from "../../shared/components/Loader";

const MyProfile = () => {
  const [userProfile, setUserProfile] = useState({
    fullName: "",
    email: "",
    classNo: "",
    gender: "",
    phoneNumber: "",
    address: "",
  });
  const {
    data: profileData,
    isLoading: isProfileDataLoading,
    isSuccess: isProfileDataSuccess,
  } = useFetchUserProfile();

  const { mutate: updateProfile, isPending: isUpdatePending } =
    useUpdateUserProfile();
  const handleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (isProfileDataSuccess)
      setUserProfile((prev) => ({ ...prev, ...profileData?.user }));
  }, [isProfileDataSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(userProfile);
  };
  return (
    <>
      <div className="my-5 mx-auto md:w-[80%] grid grid-cols-1 lg:grid-cols-3 lg:gap-10 bg-n-2 lg:p-7">
        <div className="flex justify-center items-center flex-col gap-6 p-5">
          <div className="border-2 border-n-15 rounded-full w-[6rem] h-[6rem] flex items-center justify-center overflow-hidden bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zm0 1.5c-3.313 0-6 2.011-6 4.5v1.5h12v-1.5c0-2.489-2.687-4.5-6-4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-center">
            <p className="h4">{userProfile.fullName}</p>
            <p className="font-semibold">{userProfile.email}</p>
          </div>
          <p>
            <span className="text-neutral-500">Class </span>
            <span className="font-semibold">{userProfile.classNo}</span>
          </p>
          <p>
            <span className="text-neutral-500">Board </span>
            <span className="font-semibold">CBSE</span>
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:col-span-2 flex p-5 flex-col">
          <div className="flex flex-col justify-center items-center">
            <p className="h4">Public Profile</p>
            <p>Add Information about Yourself</p>
          </div>
          <form className="mt-7 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">
                Enter your name
              </label>
              <input
                className="flex-grow p-3 border rounded-lg"
                type="text"
                name="fullName"
                value={userProfile.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">Email</label>
              <input
                className="flex-grow p-3 border rounded-lg bg-gray-200 cursor-not-allowed"
                type="email"
                name="email"
                value={userProfile.email}
                disabled
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">Phone Number</label>
              <input
                className="flex-grow p-3 border rounded-lg"
                type="text"
                name="phoneNumber"
                value={userProfile.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">Gender</label>
              <select
                className="flex-grow p-3 bg-white outline-none"
                name="gender"
                value={userProfile.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-gray-400 md:w-[25%]">Address</label>
              <textarea
                className="flex-grow p-3 border rounded-lg resize-none"
                name="address"
                rows="4"
                value={userProfile.address}
                onChange={handleChange}
              />
            </div>
              <Button type="submit" className="bg-n-15 text-n-8 px-10 ml-auto">
                Save
              </Button>
          </form>
        </div>
      </div>
      {isProfileDataLoading && <Loader message="Loading..." />}
      {isUpdatePending && <Loader message="Updating..." />}
    </>
  );
};

export default MyProfile;
