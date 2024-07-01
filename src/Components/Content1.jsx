import React from 'react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../myAssets/assets/placeholder.png'

const Content1 = () => {
  return (
    <div className='home'>
            <div className="options">
                <div className="series">
                    <Link to='/series'>
                        <img src={PlaceholderImage} alt="Movie Poster" />
                    </Link>
                    <p className='myseries'>Series</p>
                </div>
                
                <div className="movies">
                    <Link to='/movies'>
                        <img src={PlaceholderImage} alt="Movie Poster" />
                    </Link>
                    <p className="mymovies">Movies</p>
                </div>
            </div>

            <div className="movie-links">
                <div>
                   <Link to='/series'>Popular Series</Link>
                </div>
                <div className='second'>
                    <Link to='/movies'>Popular Movies</Link>
                </div>
            </div>
    </div>
  )
}

export default Content1