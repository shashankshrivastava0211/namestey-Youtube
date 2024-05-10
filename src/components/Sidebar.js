import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null; // Early return if isMenuOpen is false

    return (
        <div className="w-56 shadow-lg p-3">
            <ul className="">
                <li>
                    <Link to='/' className="flex items-center py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.75c0 1.55-.25 3.05-.75 4.5H3.75c-.5-1.45-.75-2.95-.75-4.5s.25-3.05.75-4.5h16.5c.5 1.45.75 2.95.75 4.5zM12 6l-6 6 6 6 6-6-6-6z" />
                        </svg>
                        Home
                    </Link>
                </li>
                <li className="flex items-center py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Shorts</li>
                <li className="flex items-center py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Videos</li>
                <li className="flex items-center py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Live</li>
            </ul>

            <h1 className="font-bold text-gray-900 pt-4">Subscriptions</h1>
            <ul>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Music</li>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Sports</li>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Gaming</li>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Movies</li>
            </ul>

            <h1 className="font-bold text-gray-900 pt-4">Watch Later</h1>
            <ul>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Item 1</li>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Item 2</li>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Item 3</li>
                <li className="py-2 px-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900">Item 4</li>
            </ul>
        </div>
    );
};

export default Sidebar;
