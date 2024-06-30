import React from 'react'
import PlaceholderImage from '../myAssets/assets/placeholder.png'

const Content1 = () => {
  return (
    <div className='home'>
            <div className="options">
                <div className="series">
                    <a href="#">
                        <img src={PlaceholderImage} alt="Movie Poster" />
                    </a>
                    <p className='myseries'>Series</p>
                </div>
                
                <div className="movies">
                    <a href="#">
                        <img src={PlaceholderImage} alt="Movie Poster" />
                    </a>
                    <p className="mymovies">Movies</p>
                </div>
            </div>

            <div className="movie-links">
                <div><a href="#">Popular Series</a></div>
                <div><a href="#">Popular Movies</a></div>
            </div>
    </div>
  )
}

export default Content1