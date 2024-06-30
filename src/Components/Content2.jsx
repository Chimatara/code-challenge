import React, { useState } from 'react'
import Sort from './Sort'
import Content from './Content'
import SearchBar from '../Components/SearchBar'

const Content2 = ( {type}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortData, setSortData] = useState('')

  return (
    <div className='content-two'>
        <div className="search-feature">
            <SearchBar setSearchQuery={setSearchQuery}/>
            <Sort setSortData={setSortData}/>
        </div>
        <Content type={type} searchQuery={searchQuery} sortData={sortData}/>
    </div>
  )
}

export default Content2
