import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <nav>
            <div className="main-nav">
                <h1 className="logo">DEMO Streaming</h1>
                <span>
                    <p className="login">Log in</p>
                    <button className="trial">Start your free trial</button>
                </span>
            </div>
            <div className="popular">
                <h2>{title}</h2>
            </div>
        </nav>
    </header>
  )
}

export default Header