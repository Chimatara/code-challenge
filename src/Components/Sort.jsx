import React from 'react'
import { MdArrowDropDownCircle } from 'react-icons/md'

const Sort = () => {
  return (
    <div className='dropdown'>
        <div className="mySort">
            <input type="text" className="sort" placeholder='Sort by'/>
            <button className="sort-btn"><MdArrowDropDownCircle/></button>
            <div className="dropdown-content">
                <a href="#">Year in ascending order</a>
                <a href="#">Year in descending order</a>
                <a href="#">Title in ascending order</a>
                <a href="#">Title in descending order</a>
            </div>
        </div>

    </div>
  )
}

export default Sort