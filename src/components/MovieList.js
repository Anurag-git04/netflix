import React from 'react'
import MovieCart from './MovieCart'
const MovieList = ({title, movie}) => {
  return (
    <div className='px-8'>
        <h1 className='text-3xl text-white py-3'>{title}</h1>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
            <div className='flex items-center'>
                {
                    movie?.map((movie)=>{
                        return (
                            <MovieCart key={movie.id} movieId={movie.id}  posterPath={movie.poster_path} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList