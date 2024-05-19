import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_YOUTUBE } from "../utils/constants";
import { cacheResults } from "../utils/searcSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);

  const searchCache=useSelector(store=>store.search)//susbcribing
  const dispatch = useDispatch() 

// serchcache={
//   "iphone":["iphone11","iphone12","iphone2"]==>
// }

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSearchSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()
      }
      
    },200); 


    return ()=>{
      clearTimeout(timer);
    }

  },[searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_YOUTUBE + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1] || []);

    //update an action 
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  };

  
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
      <div className="relative w-1/2">
        <input
          className="w-full bg-gray-100 py-2 px-4 rounded-full focus:outline-none"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
          

        />
        <button className="absolute top-0 right-0 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-full">
          🔍
        </button>
        {searchSuggestions.length > 0&&showSuggestions && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg mt-1">
            <ul>
              {searchSuggestions.map((suggestion, index) => (
                <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
