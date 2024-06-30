import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Content from '../Content'

const Series = () => {
  return (
    <div>
        <Header title='Popular Series' />
        <Content type='series'/>
        <Footer />
    </div>
  )
}

export default Series