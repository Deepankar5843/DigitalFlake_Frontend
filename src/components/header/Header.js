import React, { useState } from "react";
import digitalFlake from "../../assets/digitalFlake.png";
import userImg from "../../assets/user.png";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [showLogoutCard, setShowLogoutCard] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupCard = () => {
    setShowLogoutCard(true);
  };

  const handleLogout = async () => {
    try {
      await axiosClient.post("/auth/logout");
      removeItem(KEY_ACCESS_TOKEN);
      navigate("/login");

      console.log("Logout Successful");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-violet-900 p-4 flex items-center justify-between">
      <img src={digitalFlake} alt="Left" />

      <div className="relative">
        <img
          onClick={handlePopupCard}
          src={userImg}
          className="w-10 h-10 cursor-pointer"
          alt="Right"
        />
        {showLogoutCard && (
          <div className="absolute  right-1 top-12 bg-white  rounded shadow-md">
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setShowPopup(true);
                  setShowLogoutCard(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
        {showPopup ? (
          <div className="bg-white p-4 rounded-lg shadow-md absolute right-0 mt-12">
            <p>Are you sure you want to logout?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Logout
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
