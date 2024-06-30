import React from "react";
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mySearch">
      <input className="search"
       type="text"
       placeholder="Search.."
       onChange={handleInputChange} />
      <button className="search-btn">
        <FcSearch />
      </button>
    </div>
  );
};

export default SearchBar;
