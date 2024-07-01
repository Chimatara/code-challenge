import React from 'react'
import Header from '../Header'
import Content2 from '../Content2' 
import Footer from '../Footer'


const Movies = () => {
  return (
    <div>
       <Header title='Popular Movies'/>
       <Content2 type='movie'/>
       <Footer />
    </div>
  )
}

export default Movies