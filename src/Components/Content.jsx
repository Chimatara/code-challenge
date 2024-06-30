import React from 'react'
import Poster from '../myAssets/assets/pexels-cottonbro-2773497.jpg'
import { useFetchData } from './getData'

const style = {
    height: '250px',
    width: '180px',
    objectFit: 'cover',
    maxWidth: '100%',
    maxHeight: '100%',
  };
  

const Content = () => {
  const { data, isLoading, error } = useFetchData()

  if(isLoading){
    return(
        <div>
            <p>Loading...</p>
        </div>
    )
  }
  if(error){
    return(
        <div>
            <p>Oops. Something went wrong</p>
        </div>
    )
  }

  return (
    <div className='content-two'>

   <div className="movie-posters">
     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>

     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>

     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>

     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>

     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>

     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>

     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>

     <div className="image">
        <a href="#">
            <img className='poster-img' src={Poster} style={style} alt="Movie-poster" />
        </a>
        <div className="about-movies">
        <a href='#' className='movie-title'>Program Title</a>
        <a href='#' className='releaseYear'>Release Year</a>
     </div>
     </div>
   </div>

   
</div>
  )
}

export default Content