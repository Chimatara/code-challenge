import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <div className="main-nav">
                <h1 className="logo">DEMO Streaming</h1>
                <span>
                    <a href="#" className="login">Log in</a>
                    <button className="trial">Start your free trial</button>
                </span>
            </div>
            <div className="popular">
                <h2>Popular Titles</h2>
            </div>
        </nav>
    </header>
  )
}

export default Header