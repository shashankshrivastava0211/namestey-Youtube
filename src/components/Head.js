import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-3 m-2 shadow-lg bg-white">
      {/* Menu and Logo */}
      <div className="flex items-center">
        <img
          onClick={toggleMenuHandler}
          alt="menu"
          src="https://www.svgrepo.com/show/452302/hamburger-menu.svg"
          className="h-8 mr-4 cursor-pointer"
        />
        <img
          alt="logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          className="h-20" // Increased size of the YouTube logo
        />
      </div>
      {/* Search Bar */}
      <div className="flex items-center w-1/2 bg-gray-100 rounded-full px-2">
        <input
          className="w-full bg-gray-100 py-2 px-4 rounded-l-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-r-full">
          🔍
        </button>
      </div>
      {/* User Icon */}
      <img
        alt="user"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        className="h-8 rounded-full"
      />
    </div>
  );
};

export default Head;
