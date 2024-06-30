import React from 'react'
import Sort from './Sort'
import Content from './Content'
import SearchBar from '../Components/SearchBar'

const Content2 = () => {
  return (
    <div className='content-two'>
        <div className="search-feature">
            <SearchBar />
            <Sort />
        </div>
        <Content />
    </div>
  )
}

export default Content2