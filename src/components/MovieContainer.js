import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
// import store from '../redux/store'

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie)
  console.log("now")
  console.log(movie)
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
        <MovieList title={"popular movie"} movie={movie.PopularMovies}  />
        <MovieList title={"Now Playing"} movie={movie.nowPlayingMovie}  />
        <MovieList title={"Top Rated Movie"} movie={movie.topRatedMovies}  />
        <MovieList title={"Up-coming Movie"} movie={movie.upcomingMovies}  />
      </div>
      
    </div>
  )
}

export default MovieContainer