import React from 'react'
import Header from '../Header'
import Content2 from '../Content2' 


const Movies = () => {
  return (
    <div>
       <Header title='Popular Movies'/>
       <Content2 type='movie'/>
    </div>
  )
}

export default Movies