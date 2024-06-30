import React from 'react'
import { FcSearch } from 'react-icons/fc'

const SearchBar = () => {
  return (
    <div className='mySearch'>
         <input type="text" placeholder='Search..'/>
         <button className='search-btn'>{FcSearch}</button>
    </div>
  )
}

export default SearchBar