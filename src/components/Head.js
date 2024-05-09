import React from "react";

const Head = () => {
  return (
    <div className="flex items-center justify-between p-5 m-2 shadow-lg">
      {/* Menu and Logo */}
      <div className="flex items-center">
        <img
          alt="menu"
          src="https://www.svgrepo.com/show/452302/hamburger-menu.svg"
          className="h-8 mr-4"
        />
        <img
          alt="logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          className="h-16"
        />
      </div>
      {/* Search Bar */}
      <div className="flex items-center w-1/2">
        <input
          className="w-full border border-gray-400 py-2 px-4 rounded-l-full focus:outline-none "
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
        className="h-8"
      />
    </div>
  );
};

export default Head;
