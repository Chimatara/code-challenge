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
                <p onClick={() => handleSort('year-asc')}>Year in ascending order</p>
                <p onClick={() => handleSort('year-desc')}>Year in descending order</p>
                <p onClick={() => handleSort('title-asc')}>Title in ascending order</p>
                <p onClick={() => handleSort('title-desc')}>Title in descending order</p>
            </div>
        </div>

    </div>
  )
}

export default Sort