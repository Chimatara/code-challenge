import React from 'react'
import { MdArrowDropDownCircle } from 'react-icons/md'

const Sort = ({setSortData}) => {
  const handleSort = (query) => {
    setSortData(query);
  }

  return (
    <div className='dropdown'>
        <div className="mySort">
            <input type="text" className="sort" placeholder='Sort by'/>
            <button className="sort-btn"><MdArrowDropDownCircle/></button>
            <div className="dropdown-content">
                <a href="#" onClick={() => handleSort('year-asc')}>Year in ascending order</a>
                <a href="#" onClick={() => handleSort('year-desc')}>Year in descending order</a>
                <a href="#" onClick={() => handleSort('title-asc')}>Title in ascending order</a>
                <a href="#" onClick={() => handleSort('title-desc')}>Title in descending order</a>
            </div>
        </div>

    </div>
  )
}

export default Sort