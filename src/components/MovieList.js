import React from 'react'
import MovieCart from './MovieCart'
const MovieList = ({props}) => {
  return (
    <div className='px-8'>
        <h1 className='text-white'>{props.title}</h1>
        <div>
            <div className='flex items-center'>
                <MovieCart/>
                <MovieCart/>
                <MovieCart/>
                <MovieCart/>
            </div>
        </div>
    </div>
  )
}

export default MovieList